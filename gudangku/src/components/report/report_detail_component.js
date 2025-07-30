import { loadReportDetailByReportId } from '../../app/services/report_service.js'
import {createInputRow, createTextareaRow, createParagraphRow, createSelectRow } from '../common/form_component.js'
import { number_format } from '../../helper/converter.js'
import { renderReportDocByReport } from './report_doc_component.js'

export async function renderReportDetailByReportId(reportId) {
    let holder = document.querySelector('#main-content')

    holder.style.display = 'flex'
    holder.style.flexDirection = 'column'
    holder.style.alignItems = 'flex-start'
    holder.style.justifyContent = 'flex-start'
    holder.style.padding = '1rem'

    const selectOptions = {
        report_category: ['Shopping Cart','Checkout','Wash List','Wishlist','Others','Checklist'],
    }

    try {
        const res = await loadReportDetailByReportId(reportId)
        const data = res.body.data
        const data_item = res.body.data_item

        if(data) {
            let tbody = `<tr><td colspan='8' style='color:white;'>- No Item Attached -</td></td>`
            if(data_item) {
                tbody = ''
                data_item.forEach(el => {
                    tbody += `
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>${el.item_name}</td>
                            <td>${el.item_desc ?? '-'}</td>
                            <td>${el.item_qty}</td>
                            <td>${el.item_price ? `Rp. ${number_format(el.item_price, 0, ',', '.')}` : '-'}</td>
                            <td>${el.created_at}</td>
                            <td><a class="btn btn-warning"><i class="fas fa-pen-to-square"></i></a></td>
                            <td><a class="btn btn-danger"><i class="fas fa-fire"></i></a></td>
                        </tr>
                    `
                });
            }

            holder.innerHTML = `
                <h4 style="font-weight:600; margin-bottom:0;">${data.report_title}</h4>
                <p>by @${data.username}</p>
                <div class="divider"></div>
                ${createInputRow('Report Title', data.report_title)}
                ${createSelectRow('Category', data.report_category, selectOptions.report_category)}
                ${createTextareaRow('Description', data.report_desc)}
                ${createParagraphRow('Created At', data.created_at)}
                ${createParagraphRow('Updated At', data.updated_at)}
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Item Name</td>
                            <td>Description</td>
                            <td>Qty</td>
                            <td>Price</td>
                            <td>Created At</td>
                            <td>Edit</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>${tbody}</tbody>
                </table>
                <br><div class="divider"></div><br>
                <h3 style='margin-bottom:10px;'>PDF Report</h3>
                <div id="doc-holder" style="min-height: 92.5vh;"></div>
            `

            renderReportDocByReport(reportId)
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}