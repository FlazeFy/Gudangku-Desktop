import * as api from '../repositories/auth_repository.js'
import { login } from '../usecases/auth_usecase.js'

export async function loginAdmin(username, password) {
    return await login(api, username, password)
}
