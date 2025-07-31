import { API_BASE_URL } from '../../const/config.js'

export async function apiHistory(path,method) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/history${path}`, {
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

export async function repoFetchHistory(page = 1) {
    return await apiHistory(`?page=${page}&per_page_key=24`,'GET')
}

export async function repoFetchHistoryByUserId(userId, page = 1) {
    return await apiHistory(`?page=${page}&per_page_key=24&user_id=${userId}`,'GET')
}

export async function repoHardDeleteHistoryById(id) {
    return await apiHistory(`/destroy/${id}`,'DELETE')
}