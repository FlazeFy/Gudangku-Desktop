export async function usecaseLogin(api, username, password) {
    return await api.repoLogin(username, password)
}

export async function usecaseSignOut(api) {
    return await api.repoSignOut()
}
  