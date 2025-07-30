import { API_BASE_URL } from '../../const/config.js'

export async function apiGetReport(path) {
    const token = localStorage.getItem('token')

    const res = await fetch(`${API_BASE_URL}/report${path}`, {
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

export async function fetchReport(page = 1) {
    return await apiGetReport(`?page=${page}&per_page_key=36`)
}

export async function fetchReportDetailByReportId(reportId) {
    return await apiGetReport(`/detail/item/${reportId}`)
}

export async function fetchReportDocByReportId(reportId) {
    return await apiGetReport(`/detail/item/${reportId}/doc`)
}