import { serviceLoadHistoryByUserId } from '../../app/services/history_service.js'
import { btnDeleteHistoryById } from '../history/btn_delete_history_component.js'

export async function renderHistoryByUser(userId) {
    let holder = document.querySelector('#history-holder')

    try {
        let page = 1
        const res = await serviceLoadHistoryByUserId(userId, page)

        if(res.status == 200) {
            const data = res.body.data.data

            let tbody = ''
            data.forEach(dt => {
                tbody += `
                    <tr>
                        <td>${dt.history_type}</td>
                        <td>${dt.history_context}</td>
                        <td>${new Date(dt.created_at).toLocaleString()}</td>
                        <td><a class="btn btn-danger btn-delete" data-id="${dt.id}" data-history_type="${dt.history_type}" data-history_context="${dt.history_context}"><i class="fas fa-trash"></i></a></td>
                    </tr>
                `
            });

            holder.innerHTML = `
                <div style="display: flex; flex-direction: column;">
                    <table>
                        <thead>
                            <tr>
                                <td>Type</td>
                                <td>Context</td>
                                <td>Created At</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>${tbody}</tbody>
                    </table>
                </div>
            `

            btnDeleteHistoryById(renderHistoryByUser,userId)
        } else {
            holder.innerHTML = `
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}