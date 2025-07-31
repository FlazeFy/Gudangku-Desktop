import * as api from '../repositories/history_repository.js'
import { usecaseGetHistory, usecaseGetHistoryByUserId, usecaseDeleteHistoryById } from '../usecases/history_usecase.js'

export async function serviceLoadHistory(page = 1) {
  return await usecaseGetHistory(api, page)
}

export async function serviceLoadHistoryByUserId(userId, page = 1) {
  return await usecaseGetHistoryByUserId(api, userId, page)
}

export async function serviceRemoveHistoryById(id){
  return await usecaseDeleteHistoryById(api, id)
}