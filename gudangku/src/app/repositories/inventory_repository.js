import { API_BASE_URL } from '../../const/config.js'

export async function apiInventory(path, method) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/inventory${path}`, {
        method: method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })

    if (res.status == 500) throw new Error('Failed to fetch')
  
    const data = await res.json()
    return {
        status: res.status,
        body: data
    }
}

export async function repoFetchInventory(page = 1) {
    return await apiInventory(`?page=${page}&per_page_key=36`,'GET')
}

export async function repoFetchInventoryDocByInventoryId(inventoryId) {
    return await apiInventory(`/detail/${inventoryId}/doc`,'GET')
}

export async function repoSoftDeleteInventoryById(inventoryId) {
    return await apiInventory(`/delete/${inventoryId}`,'DELETE')
}