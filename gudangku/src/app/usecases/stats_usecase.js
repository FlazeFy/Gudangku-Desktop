export async function getDashboardByUserId(api, userId) {
    return await api.fetchDashboardByUserId(userId)
}

export async function getTopChartPieStatsIdByUserId(api, userId, context) {
    return await api.fetchTopChartPieStatsIdByUserId(userId, context)
}