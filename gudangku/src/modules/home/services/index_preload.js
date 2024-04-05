const { contextBridge, ipcRenderer, dialog } = require('electron')

let homeBridge = {
    getAllInventoryRender: async() => {
        const res = await ipcRenderer.invoke("getAllInventory")
        let holder = document.getElementById("inventory_tb_body")
        
        let dt = JSON.parse(res)

        dt.forEach(el => {
            holder.append += `
                <tr ${el.deleted_at !== null ? 'style="background:rgba(221, 0, 33, 0.15);"' : ''}>
                    <th scope="row">${el.id}</th>
                    <td>
                        ${el.is_favorite ? `<i class="fa-solid fa-bookmark" style="color:var(--primaryColor);" title="Favorite"></i>` : ''}
                        ${el.inventory_name}
                    </td>
                    <td>${el.inventory_category}</td>
                    <td>${el.inventory_desc !== null ? el.inventory_desc : '-'}</td>
                    <td>${el.inventory_merk !== null ? el.inventory_merk : '-'}</td>
                    <td>${el.inventory_room}</td>
                    <td>
                        ${el.inventory_storage !== null ? el.inventory_storage : '-'} / 
                        ${el.inventory_rack !== null ? el.inventory_rack : '-'}
                    </td>
                    <td>Rp. ${numberFormat(el.inventory_price, 0, ',', '.')}</td>
                    <td>${el.inventory_vol} ${el.inventory_unit}</td>
                    <td>
                        ${el.inventory_capacity_unit === 'percentage' ? `${el.inventory_capacity_vol}%` : '-'}
                    </td>
                    <td>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalInfoProps_${el.id}">
                            <i class="fa-solid fa-circle-info" style="font-size:var(--textXLG);"></i>
                        </button>
                        <!-- Modal omitted for brevity -->
                    </td>
                    <td>
                        <form action="/inventory/favToggleInventory/${el.id}" method="POST">
                            <input type="hidden" name="is_favorite" value="${el.is_favorite ? '0' : '1'}"/>
                            <input type="hidden" name="inventory_name" value="${el.inventory_name}"/>
                            <button class="btn btn-danger" type="submit" ${el.is_favorite ? 'style="background:var(--dangerBG) !important; border:none;"' : ''}>
                                <i class="fa-solid fa-heart" style="font-size:var(--textXLG);"></i>
                            </button>
                        </form>
                    </td>
                    <td>
                        <button class="btn btn-success"><i class="fa-solid fa-bell" style="font-size:var(--textXLG);"></i></button>
                    </td>
                    <td>
                        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal${el.deleted_at !== null ? 'Recover' : 'Edit'}_${el.id}">
                            ${el.deleted_at === null ? '<i class="fa-solid fa-pen-to-square" style="font-size:var(--textXLG);"></i>' : '<i class="fa-solid fa-rotate" style="font-size:var(--textXLG);"></i>'}
                        </button>
                        ${el.deleted_at !== null ? `<div class="modal fade" id="modalRecover_${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">...</div>` : ''}
                    </td>
                    <td>
                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalDelete_${el.id}">
                            ${el.deleted_at === null ? '<i class="fa-solid fa-trash" style="font-size:var(--textXLG);"></i>' : '<i class="fa-solid fa-fire" style="font-size:var(--textXLG);"></i>'}
                        </button>
                        ${el.deleted_at === null ? '' : `<div class="modal fade" id="modalDelete_${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">...</div>`}
                    </td>
                </tr>
            `
        })
    }
}

contextBridge.exposeInMainWorld("homeBridge", homeBridge)