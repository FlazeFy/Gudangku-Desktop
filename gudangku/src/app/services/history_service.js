import * as api from '../repositories/history_repository.js'
import { getHistory, getHistoryByUserId, deleteHistoryById } from '../usecases/history_usecase.js'

export async function loadHistory(page = 1) {
  return await getHistory(api, page)
}

export async function loadHistoryByUserId(userId, page = 1) {
  return await getHistoryByUserId(api, userId, page)
}

export async function removeHistoryById(id){
  return await deleteHistoryById(api, id)
}