const { contextBridge, ipcRenderer, dialog } = require('electron')

let calendarBridge = {
    getAllCalendarRender: async() => {
        const res = await ipcRenderer.invoke("getAllCalendar")
        let dt = JSON.parse(res).data

        let holder = document.getElementById("calendar_holder")
        let i = 1
        dt.forEach(el => {
            const elmt = `
               
            `

            holder.insertAdjacentHTML("beforeend",elmt)
            i++
        })
    }
}

contextBridge.exposeInMainWorld("calendarBridge", calendarBridge)