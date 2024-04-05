const axios = require("axios")
const { dialog, ipcMain } = require("electron")

ipcMain.handle("getAllInventory", async () => {
    try {
        const bearerToken = '33|0DWfzepjZqA1Utxi3X9KQ40vcmKmZdJIatAJtmnq8d0f169f'
        
        const response = await axios.get("http://127.0.0.1:8000/api/v1/inventory", {
            headers: {
                Authorization: `Bearer ${bearerToken}`,
                Accept: 'application/json',
            }
        })

        return response.data
    } catch (error) {
        dialog.showMessageBox(
            (options = {
                message: "Failed to fetch data",
                title: "Error",
            })
        ).then((res) => {
            console.log(res)
        })
        return { error: "Failed to fetch data" }
    }
})

module.exports = ipcMain
