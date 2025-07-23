import * as api from '../repositories/stats_repository.js'
import { getDashboardByUserId, getTopChartPieStatsIdByUserId, getMonthlyInventoryBarStatsByUserId, getMonthlyReportCreatedBarStatsByUserId } from '../usecases/stats_usecase.js'

export async function loadDashboardByUserId(userId) {
  return await getDashboardByUserId(api, userId)
}

export async function loadTopChartPieStatsIdByUserId(userId, context) {
  return await getTopChartPieStatsIdByUserId(api, userId, context)
}

export async function loadMonthlyInventoryBarStatsByUserId(userId, year) {
  return await getMonthlyInventoryBarStatsByUserId(api, userId, year)
}

export async function loadMonthlyReportCreatedBarStatsByUserId(userId, year) {
  return await getMonthlyReportCreatedBarStatsByUserId(api, userId, year)
}