import { API_BASE_URL } from '../../const/config.js'

export async function apiGetInventory(path) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/inventory${path}`, {
        method: 'GET',
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

export async function fetchInventory(page = 1) {
    return await apiGetInventory(`?page=${page}&per_page_key=36`)
}


export async function fetchInventoryDocByInventoryId(inventoryId) {
    return await apiGetInventory(`/detail/${inventoryId}/doc`)
}