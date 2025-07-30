export async function login(api, username, password) {
    return await api.apiLogin(username, password)
}

export async function signOut(api) {
    return await api.apiSignOut()
}
  