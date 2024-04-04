const { createWindow } = require('./main')
const { app } = require('electron')
require('./configs/database')
require('electron-reload')(__dirname)

app.allowRendererProcessReuse = true
app.whenReady().then(createWindow)