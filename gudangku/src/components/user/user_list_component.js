import { loadUser } from '../../app/services/user_service.js'
import { renderDashboardByUser } from './user_dashboard_stats_component.js'

export async function render(page = 1, module) {
    let holder = document.querySelector('#userList')
    holder.innerHTML = ''

    try {
        const res = await loadUser(page)
        const data = res.data.data

        data.forEach(dt => {
            holder.innerHTML += `
                <div class="tree">
                    <button class="folder" data-user_id="${dt.id}"><i class="fas fa-user"></i> @${dt.username}</button>
                    <div class="tree"></div>
                </div>
            `
        })

        document.querySelectorAll('.folder').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const userId = btn.dataset.user_id
                
                if(module == 'stats'){
                    renderDashboardByUser(userId)
                }
            })
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}