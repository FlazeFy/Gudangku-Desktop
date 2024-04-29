const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const axios = require("axios");
const { dialog } = require("electron");
const ipcMain = require("./src/repositories/history");

var mainWindow;
function createWindow(page) {
    const mainScreen = screen.getPrimaryDisplay()
    const dimensions = mainScreen.size

    mainWindow = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        title: "GudangKu",
        // icon: "assets/logo.png",
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, "./configs/preload.js"),
            nodeIntegration:true,
            webSecurity: false, 
            sandbox: false 
        },
    })

    mainWindow.setMenu(null)
    mainWindow.loadFile(`./src/modules/${page}/views/index.html`)

    let wc = mainWindow.webContents
    //wc.openDevTools()

    wc.on("dom-ready", (e) => {
        dialog.showMessageBox(
        (options = {
            message: "Welcome to GudangKu",
            title: "Hello",
        })
        ).then((res) => {
            console.log(res)
        })
    })
}

app.whenReady().then(() => {
    createWindow('calendar')
    mainWindow.maximize()

    app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit()
})
