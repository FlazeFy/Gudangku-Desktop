import * as api from '../repositories/history_repository.js'
import { getHistory } from '../usecases/history_usecase.js'

export async function loadHistory(page = 1) {
  return await getHistory(api, page)
}