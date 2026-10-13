const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  printPdfBuffer: (pdfData, paperSizeMm, printerName) =>
    ipcRenderer.invoke('print-pdf-buffer', pdfData, paperSizeMm, printerName),
  getPrinters: () => ipcRenderer.invoke('get-printers'),
  readFileByPath: (filePath) => ipcRenderer.invoke('read-file-by-path', filePath),
  onOpenTemplateFile: (callback) => ipcRenderer.on('open-template-file', (event, filePath) => callback(filePath)),
  refocusWindow: () => ipcRenderer.send('refocus-window'),
  getPendingFilePath: () => ipcRenderer.invoke('get-pending-file-path'),
});
