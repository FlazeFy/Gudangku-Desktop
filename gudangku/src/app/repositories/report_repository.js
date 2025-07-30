import { API_BASE_URL } from '../../const/config.js'

export async function apiReport(path,method) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/report${path}`, {
        method: method,
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

export async function fetchReport(page = 1) {
    return await apiReport(`?page=${page}&per_page_key=36`,'GET')
}

export async function fetchReportDetailByReportId(reportId) {
    return await apiReport(`/detail/item/${reportId}`,'GET')
}

export async function fetchReportDocByReportId(reportId) {
    return await apiReport(`/detail/item/${reportId}/doc`,'GET')
}

export async function hardDeleteReportItemByReportItemId(reportId) {
    return await apiReport(`/delete/item/${reportId}`,'DELETE')
}

export async function repoHardDeleteReportById(reportId) {
    return await apiReport(`/delete/report/${reportId}`,'DELETE')
}