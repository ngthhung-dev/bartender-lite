const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  printLabel: (paperSizeMm) => ipcRenderer.invoke('print-label', paperSizeMm),
  printPdfBuffer: (base64Pdf, paperSizeMm, printerName) =>
    ipcRenderer.invoke('print-pdf-buffer', base64Pdf, paperSizeMm, printerName),
  getPrinters: () => ipcRenderer.invoke('get-printers'),
  readFileByPath: (filePath) => ipcRenderer.invoke('read-file-by-path', filePath),
  onOpenTemplateFile: (callback) => ipcRenderer.on('open-template-file', (event, filePath) => callback(filePath)),
  getPendingFilePath: () => ipcRenderer.invoke('get-pending-file-path'),
});
