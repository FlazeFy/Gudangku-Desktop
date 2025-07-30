export async function getHistory(api, page) {
    return await api.fetchHistory(page)
}

export async function getHistoryByUserId(api, userId, page) {
    return await api.fetchHistoryByUserId(userId, page)
}

export async function deleteHistoryById(api, id) {
    return await api.hardDeleteHistoryById(id)
}