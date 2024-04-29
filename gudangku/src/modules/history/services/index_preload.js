const { contextBridge, ipcRenderer, dialog } = require('electron')

let historyBridge = {
    getAllHistoryRender: async() => {
        const res = await ipcRenderer.invoke("getAllHistory")
        let dt = JSON.parse(res).data

        let holder = document.getElementById("history_holder")
        let i = 1
        dt.forEach(el => {
            const elmt = `
                <div class="history-box">
                    <div class="d-flex justify-content-between">
                        <div class="">
                            <h6>${el.history_type} from item called ${el.history_context}</h6>
                        </div>
                        <div class="pe-2 ps-3">
                            <button class="btn btn-danger d-block mx-auto"><i class="fa-solid fa-trash mx-2"></i></button>
                        </div>
                    </div>
                </div>
            `

            holder.insertAdjacentHTML("beforeend",elmt)
            i++
        })
    }
}

contextBridge.exposeInMainWorld("historyBridge", historyBridge)