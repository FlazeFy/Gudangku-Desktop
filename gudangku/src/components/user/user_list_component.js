import { loadUser } from '../../app/services/user_service.js'

let currentPage = 1

async function render(page = 1) {
    let holder = document.querySelector('#userList')
    holder.innerHTML = ''

    try {
        const res = await loadUser(page)
        const data = res.data.data

        data.forEach(dt => {
            holder.innerHTML += `
                <div class="tree">
                    <div class="folder"><i class="fas fa-user"></i> @${dt.username}</div>
                    <div class="tree"></div>
                </div>
            `
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

render(currentPage)