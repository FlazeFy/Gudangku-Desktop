import { API_BASE_URL } from '../../const/config.js'

export async function apiGetDashboardByUserId(path) {
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

export async function fetchDashboardByUserId(userId) {
    return await apiGetDashboardByUserId(`/stats/dashboard?user_id=${userId}`)
}

export async function apiGetTopChartPieStatsIdByUserId(path) {
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

export async function fetchTopChartPieStatsIdByUserId(userId, context) {
    return await apiGetTopChartPieStatsIdByUserId(`/stats/inventory/total_by_${context}/price?user_id=${userId}`)
}