import { API_BASE_URL } from '../../const/config.js'

export async function apiLogin(username, password) {
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
