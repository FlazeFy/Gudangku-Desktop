export async function usecaseGetReport(api, page) {
    return await api.repoFetchReport(page)
}

export async function usecaseGetReportDetailByReportId(api, reportId) {
    return await api.repoFetchReportDetailByReportId(reportId)
}

export async function usecaseGetReportDocByReportId(api, reportId) {
    return await api.repoFetchReportDocByReportId(reportId)
}

export async function usecaseDeleteReportItemByReportItemId(api, reportId) {
    return await api.repoHardDeleteReportItemByReportItemId(reportId)
}

export async function usecaseDeleteReportById(api, reportId) {
    return await api.repoHardDeleteReportById(reportId)
}