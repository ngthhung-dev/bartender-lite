const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFile } = require('child_process');

let mainWindow = null;

// Tim tham so dong lenh la duong dan file .json (khi app duoc mo bang cach
// "Open with" hoac double-click truc tiep vao file mau .json trong Explorer).
function findFileArgInArgv(argv) {
  for (const arg of argv) {
    if (arg && arg.toLowerCase().endsWith('.json') && fs.existsSync(arg)) {
      return arg;
    }
  }
  return null;
}

// Bat duong dan file NGAY TU DAU (truoc ca khi app san sang), de khong bi lo
// mat du cua so renderer chua kip tao xong.
let pendingFilePath = findFileArgInArgv(process.argv);

function sendFileToRenderer(filePath) {
  if (!mainWindow) {
    pendingFilePath = filePath;
    return;
  }
  if (mainWindow.webContents.isLoading()) {
    mainWindow.webContents.once('did-finish-load', () => {
      mainWindow.webContents.send('open-template-file', filePath);
    });
  } else {
    mainWindow.webContents.send('open-template-file', filePath);
  }
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.focus();
}

// Dam bao chi chay 1 instance app - neu nguoi dung "Open with" mot file .json
// trong khi app da mo san, se chuyen file do cho cua so dang mo thay vi mo
// them 1 cua so moi.
const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', (event, argv) => {
    const filePath = findFileArgInArgv(argv);
    if (filePath) sendFileToRenderer(filePath);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    title: 'Bartender Lite',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow = win;

  // Chan dieu huong / mo cua so moi ngoai app (ung dung hoan toan offline).
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });

  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  win.on('closed', () => {
    if (mainWindow === win) mainWindow = null;
  });
}

// macOS: khi "Open with" mot file .json, he dieu hanh phat su kien nay thay
// vi truyen qua process.argv.
app.on('open-file', (event, filePath) => {
  event.preventDefault();
  if (app.isReady() && mainWindow) {
    sendFileToRenderer(filePath);
  } else {
    pendingFilePath = filePath;
  }
});

// CO CHE "HOI LAI" (PULL) TU RENDERER: thay vi chi dua vao viec main process
// TU DAY (push) duong dan file qua su kien 'open-template-file' - co the bi
// lo neu renderer chua kip dang ky nghe kip luc - renderer se CHU DONG hoi
// lai main process ngay khi da khoi dong xong (DOMContentLoaded) xem co file
// nao dang cho duoc mo hay khong. Day la co che dang tin cay hon cho LAN MO
// DAU TIEN cua app (double-click file .json khi app chua chay).
ipcMain.handle('get-pending-file-path', () => {
  const p = pendingFilePath;
  pendingFilePath = null;
  return p;
});

// Lay danh sach may in de nguoi dung chon trong app.
ipcMain.handle('get-printers', async (event) => {
  try {
    const printers = await event.sender.getPrintersAsync();
    return printers.map((p) => ({ name: p.name, displayName: p.displayName || p.name, isDefault: !!p.isDefault }));
  } catch (err) {
    return [];
  }
});

// Chay PowerShell KHONG qua shell trung gian (execFile + mang tham so) de ten may in /
// duong dan co ky tu dac biet khong the chen them lenh.
function runPs(command) {
  return new Promise((resolve, reject) => {
    execFile(
      'powershell',
      ['-NoProfile', '-NonInteractive', '-WindowStyle', 'Hidden', '-Command', command],
      { windowsHide: true },
      (error, stdout) => {
        if (error) reject(error);
        else resolve((stdout || '').trim());
      }
    );
  });
}

async function getWindowsDefaultPrinter() {
  try {
    return await runPs("(Get-CimInstance -ClassName Win32_Printer | Where-Object {$_.Default -eq $true}).Name");
  } catch (err) {
    return null;
  }
}

async function setWindowsDefaultPrinter(printerName) {
  // Loc WQL: escape \ va '. Chuoi PowerShell trong "..." : escape ` $ ".
  const wql = String(printerName).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const ps = wql.replace(/[`$"]/g, (c) => '`' + c);
  await runPs(`Get-CimInstance -ClassName Win32_Printer -Filter "Name='${ps}'" | Invoke-CimMethod -MethodName SetDefaultPrinter`);
}

// CACH DANG TIN CAY NHAT: uy thac viec in PDF cho chinh UNG DUNG DOC PDF MAC
// DINH tren may nguoi dung (Adobe Reader, Foxit, Edge...) bang cach goi lenh
// "Print" cua he dieu hanh - CHINH XAC nhu khi nguoi dung tu mo file PDF va
// bam File > Print thu cong (da duoc xac nhan in dung khich thuoc).
//
// Vi lenh "Print" nay luon in vao MAY IN MAC DINH cua he thong (khong the
// chi dinh truc tiep may in khac), de ho tro NGUOI DUNG CHON MAY IN rieng
// trong app (khong phai lam thay doi may in mac dinh vinh vien), tren Windows
// ta TAM THOI doi may in mac dinh sang may duoc chon, in xong roi doi lai
// may in mac dinh cu. Tren Linux dung truc tiep tuy chon -d cua lenh lp,
// khong can "meo" doi may in mac dinh.
ipcMain.handle('print-pdf-buffer', async (event, pdfData, paperSizeMm, printerName) => {
  const tempPath = path.join(os.tmpdir(), `bartender-print-${Date.now()}.pdf`);
  // Nhan bo dem nhi phan (Uint8Array) tu renderer; van chap nhan base64 (ban cu).
  const buffer = typeof pdfData === 'string' ? Buffer.from(pdfData, 'base64') : Buffer.from(pdfData);
  await fs.promises.writeFile(tempPath, buffer);

  const cleanup = () => setTimeout(() => fs.unlink(tempPath, () => {}), 30000);

  if (process.platform === 'win32') {
    let originalDefault = null;
    try {
      if (printerName) {
        originalDefault = await getWindowsDefaultPrinter();
        if (originalDefault && originalDefault !== printerName) {
          await setWindowsDefaultPrinter(printerName);
        }
      }

      const result = await new Promise((resolve) => {
        const escapedPath = tempPath.replace(/'/g, "''");
        const psCommand = `Start-Process -FilePath '${escapedPath}' -Verb Print`;
        runPs(psCommand).then(
          () => resolve({ success: true, errorType: null }),
          (error) => resolve({ success: false, errorType: error.message })
        );
      });

      // Cho vai giay de lenh in duoc spool xong truoc khi doi lai may in mac dinh.
      if (originalDefault && originalDefault !== printerName) {
        setTimeout(() => {
          setWindowsDefaultPrinter(originalDefault).catch(() => {});
        }, 4000);
      }

      cleanup();
      return result;
    } catch (err) {
      cleanup();
      return { success: false, errorType: err.message };
    }
  }

  if (process.platform === 'linux') {
    return new Promise((resolve) => {
      const lpArgs = printerName ? ['-d', String(printerName), tempPath] : [tempPath];
      execFile('lp', lpArgs, (error) => {
        cleanup();
        resolve({ success: !error, errorType: error ? error.message : null });
      });
    });
  }

  // Fallback (vd macOS hoac loi khac): dung trinh xem PDF noi bo cua Electron.
  const pdfWindow = new BrowserWindow({
    show: false,
    webPreferences: { plugins: true },
  });

  try {
    await pdfWindow.loadURL(`file://${tempPath}`);
    await new Promise((r) => setTimeout(r, 800));

    const printOptions = {
      silent: false,
      printBackground: true,
      margins: { marginType: 'none' },
    };
    if (printerName) printOptions.deviceName = printerName;
    if (paperSizeMm && paperSizeMm.widthMm > 0 && paperSizeMm.heightMm > 0) {
      printOptions.pageSize = {
        width: Math.round(Math.max(paperSizeMm.widthMm, 5) * 1000),
        height: Math.round(Math.max(paperSizeMm.heightMm, 5) * 1000),
      };
    }

    const result = await new Promise((resolve) => {
      pdfWindow.webContents.print(printOptions, (success, errorType) =>
        resolve({ success, errorType: errorType || null })
      );
    });

    return result;
  } finally {
    pdfWindow.close();
    cleanup();
  }
});

// Doc lai file Excel tu DUONG DAN DA LUU trong mau thiet ke (thay vi nhung
// toan bo du lieu vao file mau, giup file mau nhe hon). Neu file khong con
// ton tai o duong dan do (bi xoa/di chuyen), tra ve loi de renderer bao cho
// nguoi dung biet va tu chon lai file.
ipcMain.handle('read-file-by-path', async (event, filePath) => {
  try {
    if (!filePath || typeof filePath !== 'string' || !fs.existsSync(filePath)) {
      return { success: false, errorType: 'not_found' };
    }
    // Chi cho doc dung cac dinh dang ma app su dung (mau .json, du lieu Excel/CSV).
    if (!/\.(json|xlsx|xls|csv)$/i.test(filePath)) {
      return { success: false, errorType: 'unsupported_type' };
    }
    const buffer = await fs.promises.readFile(filePath);
    // Tra ve du lieu nhi phan (Uint8Array) - khong chuyen qua base64.
    return { success: true, data: new Uint8Array(buffer) };
  } catch (err) {
    return { success: false, errorType: err.message };
  }
});

// Lay lai focus cua so sau hop thoai alert/confirm (loi Electron tren Windows).
ipcMain.on('refocus-window', () => {
  if (!mainWindow) return;
  mainWindow.blur();
  mainWindow.focus();
  mainWindow.webContents.focus();
});

app.whenReady().then(() => {
  if (!gotSingleInstanceLock) return; // ban sao thu 2: dang thoat, khong tao cua so
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
