import { loadInventory } from '../../app/services/inventory_service.js'

let currentPage = 1

async function render(page = 1) {
    let holder = document.querySelector('#inventoryList')
    holder.innerHTML = ''

    try {
        const res = await loadInventory(page)
        const data = res.data.data

        data.forEach(dt => {
            holder.innerHTML += `
                <div class="tree">
                    <div class="folder"><i class="fas fa-box"></i> ${dt.inventory_name}</div>
                    <div class="tree"></div>
                </div>
            `
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

render(currentPage)