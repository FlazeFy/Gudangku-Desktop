import { API_BASE_URL } from '../../const/config.js'

export async function apiGetHistory(path) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/history${path}`, {
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

export async function fetchHistory(page = 1) {
    return await apiGetHistory(`?page=${page}&per_page_key=24`)
}

export async function fetchHistoryByUserId(userId, page = 1) {
    return await apiGetHistory(`?page=${page}&per_page_key=24&user_id=${userId}`)
}