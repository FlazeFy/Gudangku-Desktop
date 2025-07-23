export async function getHistory(api, page) {
    return await api.fetchHistory(page)
}