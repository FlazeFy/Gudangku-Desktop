export async function usecaseGetHistory(api, page) {
    return await api.repoFetchHistory(page)
}

export async function usecaseGetHistoryByUserId(api, userId, page) {
    return await api.repoFetchHistoryByUserId(userId, page)
}

export async function usecaseDeleteHistoryById(api, id) {
    return await api.repoHardDeleteHistoryById(id)
}