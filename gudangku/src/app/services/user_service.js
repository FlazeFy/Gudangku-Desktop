import * as api from '../repositories/user_repository.js'
import { usecaseGetUser } from '../usecases/user_usecase.js'

export async function serviceLoadUser(page = 1) {
  return await usecaseGetUser(api, page)
}