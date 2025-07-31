import { serviceLoadHistory } from '../../app/services/history_service.js'
import { btnDeleteHistoryById } from './btn_delete_history_component.js'

let currentPage = 1

async function render(page = 1) {
    const tbody = document.querySelector('#historyTable tbody')
    const pagination = document.getElementById('pagination')
    tbody.innerHTML = ''
    pagination.innerHTML = ''

    try {
        const res = await serviceLoadHistory(page)
        const data = res.body.data.data
        const curr_page = res.body.data.current_page
        const last_page = res.body.data.last_page

        data.forEach(dt => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${dt.username}</td>
                <td>${dt.history_type}</td>
                <td>${dt.history_context}</td>
                <td>${new Date(dt.created_at).toLocaleString()}</td>
                <td><a class="btn btn-danger btn-delete" data-id="${dt.id}" data-history_type="${dt.history_type}" data-history_context="${dt.history_context}"><i class="fas fa-trash"></i></a></td>
            `
            tbody.appendChild(tr)
        })

        // Button Pagination
        const prev = document.createElement('button')
        prev.textContent = 'Previous'
        prev.disabled = curr_page === 1
        prev.onclick = () => render(curr_page - 1)

        const next = document.createElement('button')
        next.textContent = 'Next'
        next.disabled = curr_page === last_page
        next.onclick = () => render(curr_page + 1)

        pagination.appendChild(prev)
        pagination.append(` Page ${curr_page} of ${last_page}`)
        pagination.appendChild(next)

        btnDeleteHistoryById(render,page)
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="4">${err}</td></tr>`
    }
}

render(currentPage)