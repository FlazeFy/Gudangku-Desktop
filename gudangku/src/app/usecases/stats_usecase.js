export async function getDashboardByUserId(api, userId) {
    return await api.fetchDashboardByUserId(userId)
}