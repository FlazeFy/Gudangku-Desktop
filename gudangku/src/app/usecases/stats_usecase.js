export async function usecaseGetDashboardByUserId(api, userId) {
    return await api.repoFetchDashboardByUserId(userId)
}

export async function usecaseGetDashboard(api) {
    return await api.repoFetchDashboard()
}

export async function usecaseGetTopChartPieStatsIdByUserId(api, userId, context) {
    return await api.repoFetchTopChartPieStatsIdByUserId(userId, context)
}

export async function usecaseGetMonthlyInventoryBarStatsByUserId(api, userId, year) {
    return await api.repoFetchMonthlyInventoryBarStatsByUserId(userId, year)
}

export async function usecaseGetMonthlyReportCreatedBarStatsByUserId(api, userId, year) {
    return await api.repoFetchMonthlyReportCreatedBarStatsByUserId(userId, year)
}