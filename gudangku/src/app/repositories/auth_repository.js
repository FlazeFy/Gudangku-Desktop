import { API_BASE_URL } from '../../const/config.js'

export async function repoLogin(username, password) {
    const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Login failed')
    return data
}

export async function repoSignOut() {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/logout`, {
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


