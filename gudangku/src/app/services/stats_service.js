import * as api from '../repositories/stats_repository.js'
import { getDashboardByUserId, getTopChartPieStatsIdByUserId } from '../usecases/stats_usecase.js'

export async function loadDashboardByUserId(userId) {
  return await getDashboardByUserId(api, userId)
}

export async function loadTopChartPieStatsIdByUserId(userId, context) {
  return await getTopChartPieStatsIdByUserId(api, userId, context)
}