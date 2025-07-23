import { loadReport } from '../../app/services/report_service.js'

let currentPage = 1

async function render(page = 1) {
    let holder = document.querySelector('#reportList')
    holder.innerHTML = ''

    try {
        const res = await loadReport(page)
        const data = res.data.data

        data.forEach(dt => {
            holder.innerHTML += `
                <div class="tree">
                    <div class="folder">
                        <div>
                            <i class="fas fa-file"></i>
                        </div>
                        <div>
                            <h4 style="font-weight:600; margin-bottom:0;">${dt.report_title}</h4>
                            <p>by @${dt.username}</p>
                        </div>
                    </div>
                    <div class="tree"></div>
                </div>
            `
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

render(currentPage)