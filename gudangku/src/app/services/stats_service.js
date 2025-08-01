import * as api from '../repositories/stats_repository.js'
import { usecaseGetDashboardByUserId, usecaseGetTopChartPieStatsIdByUserId, usecaseGetMonthlyInventoryBarStatsByUserId, usecaseGetMonthlyReportCreatedBarStatsByUserId, usecaseGetDashboard } from '../usecases/stats_usecase.js'

export async function serviceLoadDashboardByUserId(userId) {
  return await usecaseGetDashboardByUserId(api, userId)
}

export async function serviceLoadDashboard() {
  return await usecaseGetDashboard(api)
}

export async function serviceLoadTopChartPieStatsIdByUserId(userId, context) {
  return await usecaseGetTopChartPieStatsIdByUserId(api, userId, context)
}

export async function serviceLoadMonthlyInventoryBarStatsByUserId(userId, year) {
  return await usecaseGetMonthlyInventoryBarStatsByUserId(api, userId, year)
}

export async function serviceLoadMonthlyReportCreatedBarStatsByUserId(userId, year) {
  return await usecaseGetMonthlyReportCreatedBarStatsByUserId(api, userId, year)
}