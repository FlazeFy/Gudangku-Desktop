import { loadHistory } from '../../app/services/history_service.js'

let currentPage = 1

async function render(page = 1) {
    const tbody = document.querySelector('#historyTable tbody')
    const pagination = document.getElementById('pagination')
    tbody.innerHTML = ''
    pagination.innerHTML = ''

    try {
        const res = await loadHistory(page)
        const data = res.data.data
        const curr_page = res.data.current_page
        const last_page = res.data.last_page

        data.forEach(dt => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${dt.username}</td>
                <td>${dt.history_type}</td>
                <td>${dt.history_context}</td>
                <td>${new Date(dt.created_at).toLocaleString()}</td>
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
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="4">${err}</td></tr>`
    }
}

render(currentPage)