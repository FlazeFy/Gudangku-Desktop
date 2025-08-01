import { createCheckboxRow, createInputRow, createParagraphRow, createSelectRow } from '../common/form_component.js'
import { btnDeleteInventoryById } from './btn_delete_inventory_component.js'
import { btnPermanentlyDeleteInventoryById } from './btn_permanent_delete_inventory_component.js'
import { btnRecoverInventoryById } from './btn_recover_inventory_component.js'
import { renderInventoryDocByInventoryId } from './inventory_doc_component.js'

export function renderDetail(data) {
    const holder = document.querySelector('#main-content')

    holder.style.display = 'flex'
    holder.style.flexDirection = 'column'
    holder.style.alignItems = 'flex-start'
    holder.style.justifyContent = 'flex-start'
    holder.style.padding = '1rem'

    const selectOptions = {
        inventory_category: ['Skin & Body Care', 'Electronics', 'Furniture', 'Clothing'],
        inventory_room: ['Car Cabin', 'Living Room', 'Warehouse', 'Kitchen'],
        inventory_unit: ['Pcs', 'Box', 'Kg', 'L'],
        inventory_capacity_unit: ['percentage', 'ml', 'g', 'L'],
    }

    holder.innerHTML = `
        <h4 style="font-weight:600; margin-bottom:0;">${data.inventory_name}</h4>
        <p>by @${data.username}</p>
        <div class="divider"></div>
        ${createInputRow('Inventory Name', data.inventory_name)}
        ${createSelectRow('Category', data.inventory_category, selectOptions.inventory_category)}
        ${createInputRow('Description', data.inventory_desc)}
        ${createInputRow('Brand / Merk', data.inventory_merk)}
        ${createSelectRow('Room', data.inventory_room, selectOptions.inventory_room)}
        ${createInputRow('Storage', data.inventory_storage)}
        ${createInputRow('Rack', data.inventory_rack)}
        ${createInputRow('Price', data.inventory_price, 'number')}
        ${createInputRow('Color', data.inventory_color)}
        ${createInputRow('Volume', data.inventory_vol, 'number')}
        ${createSelectRow('Volume Unit', data.inventory_unit, selectOptions.inventory_unit)}
        ${createInputRow('Capacity Volume', data.inventory_capacity_vol, 'number')}
        ${createSelectRow('Capacity Unit', data.inventory_capacity_unit, selectOptions.inventory_capacity_unit)}
        ${createCheckboxRow('Favorite', data.is_favorite)}
        ${createParagraphRow('Created At', data.created_at)}
        ${createParagraphRow('Updated At', data.updated_at)}
        ${createParagraphRow('Deleted At', data.deleted_at)}
        <div class="divider"></div><br>
        <h3 style='margin-bottom:10px;'>Manage</h3>
        <div style='display:inline-block;'>
            <a class='btn btn-danger' id="btn-delete-inventory" data-id="${data.id}" data-inventory_name="${data.inventory_name}"><i class="fas fa-trash"></i> Delete</a>
            ${data.deleted_at ? `<a class='btn btn-success' id="btn-recover-inventory" data-id="${data.id}" data-inventory_name="${data.inventory_name}"><i class="fas fa-rotate-left"></i> Recover</a>`:''}
            ${data.deleted_at ? `<a class='btn btn-danger' id="btn-destroy-inventory" data-id="${data.id}" data-inventory_name="${data.inventory_name}"><i class="fas fa-fire"></i> Permanently Delete</a>`:''}
        </div><br>
        <div class="divider"></div><br>
        <h3 style='margin-bottom:10px;'>PDF Report</h3>
        <div id="doc-holder" style="min-height: 92.5vh;"></div>
    `

    renderInventoryDocByInventoryId(data.id)
    btnDeleteInventoryById()
    btnPermanentlyDeleteInventoryById()
    btnRecoverInventoryById()
}
