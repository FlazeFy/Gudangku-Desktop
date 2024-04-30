const { contextBridge, ipcRenderer, dialog } = require('electron')

let reportBridge = {
    getAllReportRender: async() => {
        const res = await ipcRenderer.invoke("getAllReport")
        let dt = JSON.parse(res).data

        let holder = document.getElementById("report_holder")
        let i = 1
        dt.forEach(el => {
            const elmt = `
                <button class="report-box">
                    <div class="d-flex justify-content-between mb-2">
                        <div>
                            <h3 style="font-weight:500; font-size:var(--textJumbo);">${el.report_title}</h3>
                        </div>
                        <div>
                            <span class="bg-success text-white rounded-pill px-3 py-2">${el.report_category}</span>
                        </div>
                    </div>
                    ${el.report_desc ? `<p class="mt-2">${el.report_desc}</p>` : `<p class="text-secondary fst-italic mt-2">- No Description Provided -</p>`}
                    <br>
                    <h3>Items : </h3>
                    <p>${el.report_items}</p>
            
                    ${el.report_category === 'Shopping Cart' || el.report_category === 'Wishlist' ? `
                        <div class="d-flex justify-content-between mt-3">
                            <div>
                                <h3 class="fw-bold" style="font-size:var(--textJumbo);">Total Price: Rp. ${el.item_price}</h3>
                            </div>
                            <div>
                                <h3 class="fw-bold" style="font-size:var(--textJumbo);">Total Item : ${el.total_item}</h3>
                            </div>
                        </div>
                    ` : ''}
                </button>
            `

            holder.insertAdjacentHTML("beforeend",elmt)
            i++
        })
    }
}

contextBridge.exposeInMainWorld("reportBridge", reportBridge)