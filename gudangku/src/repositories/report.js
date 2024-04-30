const axios = require("axios")
const { dialog, ipcMain } = require("electron")

ipcMain.handle("getAllReport", async () => {
    try {
        const bearerToken = '33|0DWfzepjZqA1Utxi3X9KQ40vcmKmZdJIatAJtmnq8d0f169f'
        
        const response = await axios.get("http://127.0.0.1:8000/api/v1/report", {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                Accept: 'application/json',
            }
        })

        return JSON.stringify(response.data)
    } catch (error) {
        dialog.showMessageBox(
            (options = {
                message: "Failed to fetch data : "+error,
                title: "Error",
            })
        ).then((res) => {
            console.log(res)
        })
        return { error: "Failed to fetch data" }
    }
})

module.exports = ipcMain
