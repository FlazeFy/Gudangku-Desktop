const { contextBridge, ipcRenderer, dialog } = require('electron')

function convertDatetime(val, type)  {
    try {
        if(val){
            const result = new Date(val)
    
            if (type == "full") {
                const now = new Date(Date.now())
                const yesterday = new Date()
                const tomorrow = new Date()
                yesterday.setDate(yesterday.getDate() - 1)
                tomorrow.setDate(tomorrow.getDate() + 1)
                
                if (result.toDateString() === now.toDateString()) {
                    return ` today_at ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
                } else if (result.toDateString() === yesterday.toDateString()) {
                    return ` yesterday_at ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
                } else if (result.toDateString() === tomorrow.toDateString()) {
                    return ` tommorow_at ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
                } else {
                    return ` ${result.getFullYear()}/${(result.getMonth() + 1)}/${("0" + result.getDate()).slice(-2)} ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
                }
            } else if (type == "24h" || type == "12h") {
                return `${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`;
            } else if (type == "datetime") {
                return ` ${result.getFullYear()}/${(result.getMonth() + 1)}/${("0" + result.getDate()).slice(-2)} ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
            } else if (type == "date") {
                return `${result.getFullYear()}-${("0" + (result.getMonth() + 1)).slice(-2)}-${("0" + result.getDate()).slice(-2)}`
            } else if (type == "calendar") {
                const result = new Date(val)
                const offsetHours = getUTCHourOffset()
                result.setUTCHours(result.getUTCHours() + offsetHours)
            
                return `${result.getFullYear()}-${("0" + (result.getMonth() + 1)).slice(-2)}-${("0" + result.getDate()).slice(-2)} ${("0" + result.getHours()).slice(-2)}:${("0" + result.getMinutes()).slice(-2)}`
            }        
        } else {
            return "-"
        }
    } catch (error) {
        throw error
    }
}

let profileBridge = {
    getMyProfileRender: async() => {
        const res = await ipcRenderer.invoke("getMyProfile")
        let dt = JSON.parse(res).data

        let holder = document.getElementById("profile_holder")
        let i = 1
        const elmt = `
            <label>Username</label>
            <input type="text" name="username" value="${dt.username}" class="form-control mt-2"/><br>
            <label>Email</label>
            <input type="email" name="email" value="${dt.email}" class="form-control mt-2"/><br>
            <label class="fst-italic">Joined since <span class="date_holder">${convertDatetime(dt.created_at,'datetime')}</span></label>
        `

        holder.insertAdjacentHTML("beforeend",elmt)
        i++
    }
}

contextBridge.exposeInMainWorld("profileBridge", profileBridge)