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
                    <div class="folder"><i class="fas fa-file"></i> ${dt.report_title}</div>
                    <div class="tree"></div>
                </div>
            `
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

render(currentPage)