import * as api from '../repositories/auth_repository.js'
import { login, signOut } from '../usecases/auth_usecase.js'

export async function loginAdmin(username, password) {
    return await login(api, username, password)
}

export async function signOutAdmin() {
    return await signOut(api)
}
