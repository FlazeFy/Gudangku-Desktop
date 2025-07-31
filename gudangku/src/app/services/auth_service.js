import * as api from '../repositories/auth_repository.js'
import { usecaseLogin, usecaseSignOut } from '../usecases/auth_usecase.js'

export async function serviceLoginAdmin(username, password) {
    return await usecaseLogin(api, username, password)
}

export async function serviceSignOutAdmin() {
    return await usecaseSignOut(api)
}
