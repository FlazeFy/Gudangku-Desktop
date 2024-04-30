const { contextBridge } = require('electron')

const homeBridge = require('../src/modules/home/services/index_preload')
const historyBridge = require('../src/modules/history/services/index_preload')
const reportBridge = require('../src/modules/report/services/index_preload')

if (location.href.endsWith('index.html')) {
  Bridge = reportBridge
}
contextBridge.exposeInMainWorld('Bridge', Bridge)