export async function getDashboardByUserId(api, userId) {
    return await api.fetchDashboardByUserId(userId)
}

export async function getTopChartPieStatsIdByUserId(api, userId, context) {
    return await api.fetchTopChartPieStatsIdByUserId(userId, context)
}

export async function getMonthlyInventoryBarStatsByUserId(api, userId, year) {
    return await api.fetchMonthlyInventoryBarStatsByUserId(userId, year)
}

export async function getMonthlyReportCreatedBarStatsByUserId(api, userId, year) {
    return await api.fetchMonthlyReportCreatedBarStatsByUserId(userId, year)
}