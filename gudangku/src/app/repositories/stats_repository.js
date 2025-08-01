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
        body: data
    }
}

export async function repoFetchDashboard() {
    return await apiGetStats(`/stats/dashboard`)
}

export async function repoFetchDashboardByUserId(userId) {
    return await apiGetStats(`/stats/dashboard?user_id=${userId}`)
}

export async function repoFetchTopChartPieStatsIdByUserId(userId, context) {
    return await apiGetStats(`/stats/inventory/total_by_${context}/price?user_id=${userId}`)
}

export async function repoFetchMonthlyInventoryBarStatsByUserId(userId, year) {
    return await apiGetStats(`/stats/inventory/total_created_per_month/${year}?user_id=${userId}`)
}

export async function repoFetchMonthlyReportCreatedBarStatsByUserId(userId, year) {
    return await apiGetStats(`/stats/report/total_created_per_month/${year}?user_id=${userId}`)
}