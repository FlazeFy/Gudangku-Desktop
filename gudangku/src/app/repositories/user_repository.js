import { API_BASE_URL } from '../../const/config.js'

export async function apiGetAllUser(path) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}${path}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
  
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

export async function repoFetchUser(page = 1) {
    return await apiGetAllUser(`/user?page=${page}&per_page_key=36`)
}