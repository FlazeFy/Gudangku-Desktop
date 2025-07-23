import { loadInventory } from '../../app/services/inventory_service.js'
import { renderDetail } from './inventory_detail_component.js'

let currentPage = 1

async function render(page = 1) {
    let holder = document.querySelector('#inventoryList')
    holder.innerHTML = ''

    try {
        const res = await loadInventory(page)
        const data = res.data.data

        data.forEach((dt,idx) => {
            holder.innerHTML += `
                <div class="tree">
                    <button class="folder" data-idx="${idx}">
                        <div>
                            <i class="fas fa-box"></i>
                        </div>
                        <div>
                            <h4 style="font-weight:600; margin-bottom:0;">${dt.inventory_name}</h4>
                            <p>by @${dt.username}</p>
                        </div>
                    </button>
                    <div class="tree"></div>
                </div>
            `
        })

        document.querySelectorAll('.folder').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = btn.dataset.idx
                renderDetail(data[idx])
            })
        })
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

render(currentPage)