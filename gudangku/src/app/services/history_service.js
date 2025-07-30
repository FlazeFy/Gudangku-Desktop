import * as api from '../repositories/history_repository.js'
import { getHistory, getHistoryByUserId } from '../usecases/history_usecase.js'

export async function loadHistory(page = 1) {
  return await getHistory(api, page)
}

export async function loadHistoryByUserId(userId, page = 1) {
  return await getHistoryByUserId(api, userId, page)
}