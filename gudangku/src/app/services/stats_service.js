import * as api from '../repositories/stats_repository.js'
import { getDashboardByUserId } from '../usecases/stats_usecase.js'

export async function loadDashboardByUserId(userId) {
  return await getDashboardByUserId(api, userId)
}