import { API_BASE_URL } from '../../const/config.js'

export async function apiGetStats(path) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}${path}`, {
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
        data
    }
}

export async function fetchDashboardByUserId(userId) {
    return await apiGetStats(`/stats/dashboard?user_id=${userId}`)
}

export async function fetchTopChartPieStatsIdByUserId(userId, context) {
    return await apiGetStats(`/stats/inventory/total_by_${context}/price?user_id=${userId}`)
}

export async function fetchMonthlyInventoryBarStatsByUserId(userId, year) {
    return await apiGetStats(`/stats/inventory/total_created_per_month/${year}?user_id=${userId}`)
}