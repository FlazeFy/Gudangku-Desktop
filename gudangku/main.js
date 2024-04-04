const { BrowserWindow, screen } = require('electron');

let window;

function createWindow(){
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

    window = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation: false,
            webSecurity: false, 
            sandbox: false 
        }
    })

    window.loadFile('./src/views/landing/index.html')
}

module.exports = {
    createWindow
}

// function createWindow() {
//     const mainScreen = screen.getPrimaryDisplay();
//     const dimensions = mainScreen.size;

//     mainWindow = new BrowserWindow({
//         width: dimensions.width,
//         height: dimensions.height,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });

//     const apiUrl = 'http://127.0.0.1:8000/api/v1/inventory';
//     const authToken = '33|0DWfzepjZqA1Utxi3X9KQ40vcmKmZdJIatAJtmnq8d0f169f'; 
//     const apiService = new ApiService(apiUrl, authToken);

//     mainWindow.loadURL(
//         url.format({
//             pathname: path.join(__dirname, 'pages/index.html'),
//             protocol: 'file:',
//             slashes: true
//         })
//     );

//     mainWindow.webContents.once('dom-ready', async () => {
//         try {
//             const response = await apiService.fetchData();
//             mainWindow.webContents.send('data-fetched', response.data.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             mainWindow.webContents.send('data-fetch-error', error.message || 'Unknown error occurred');
//         }
//     });

//     mainWindow.on('closed', () => {
//         mainWindow = null;
//     });
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });

// app.on('activate', () => {
//     if (mainWindow === null) {
//         createWindow();
//     }
// });

// // Example: Handle API request from renderer process
// ipcMain.handle('fetch-api-data', async (event, url) => {
//     const apiService = new ApiService(url, authToken);
//     try {
//         const response = await apiService.fetchData();
//         return response.data.data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw new Error('Failed to fetch data');
//     }
// });
