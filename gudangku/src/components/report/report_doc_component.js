import { loadReportDocByReportId } from '../../app/services/report_service.js'

export async function renderReportDocByReport(reportId) {
    let holder = document.querySelector('#doc-holder')

    try {
        const res = await loadReportDocByReportId(reportId)

        if(res.status == 200) {
            const data = res.body.data

            let editor = new RichTextEditor("#doc-holder")
            editor.setHTML(data)
        } else {
            holder.innerHTML = `
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}