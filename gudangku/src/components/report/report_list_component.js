import { serviceLoadReport } from '../../app/services/report_service.js'
import { renderReportDetailByReportId } from './report_detail_component.js'

export async function render(page = 1) {
    let holder = document.querySelector('#reportList')
    holder.innerHTML = ''

    try {
        const res = await serviceLoadReport(page)
        const data = res.body.data.data

        data.forEach(dt => {
            holder.innerHTML += `
                <div class="tree">
                    <div class="folder" data-report_id="${dt.id}">
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

        document.querySelectorAll('.folder').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const userId = btn.dataset.report_id
                
                let holder = document.querySelector('#main-content')
                holder.innerHTML = ''
                renderReportDetailByReportId(userId, render)
            })
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}