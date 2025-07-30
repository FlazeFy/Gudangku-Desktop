export async function getReport(api, page) {
    return await api.fetchReport(page)
}

export async function getReportDetailByReportId(api, reportId) {
    return await api.fetchReportDetailByReportId(reportId)
}

export async function getReportDocByReportId(api, reportId) {
    return await api.fetchReportDocByReportId(reportId)
}