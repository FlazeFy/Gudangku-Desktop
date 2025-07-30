import { loadInventoryDocByInventoryId } from '../../app/services/inventory_service.js'

export async function renderInventoryDocByInventoryId(inventoryId) {
    let holder = document.querySelector('#doc-holder')

    try {
        const res = await loadInventoryDocByInventoryId(inventoryId)

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