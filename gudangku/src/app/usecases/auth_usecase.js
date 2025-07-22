export async function login(api, username, password) {
    return await api.apiLogin(username, password)
}
  