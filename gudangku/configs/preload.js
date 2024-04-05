const { contextBridge, ipcMain, ipcRenderer } = require('electron')

const homeBridge = require('../src/modules/home/services/index_preload')

if (location.href.endsWith('index.html')) {
  Bridge = homeBridge
}
contextBridge.exposeInMainWorld('Bridge', Bridge)