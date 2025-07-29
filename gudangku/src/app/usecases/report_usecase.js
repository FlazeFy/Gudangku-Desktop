export async function getReport(api, page) {
    return await api.fetchReport(page)
}

export async function getReportDetailByReportId(api, reportId) {
    return await api.fetchReportDetailByReportId(reportId)
}