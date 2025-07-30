import * as api from '../repositories/report_repository.js'
import { getReport, getReportDetailByReportId, getReportDocByReportId, deleteReportItemByReportItemId, usecaseDeleteReportById } from '../usecases/report_usecase.js'

export async function loadReport(page = 1) {
  return await getReport(api, page)
}

export async function loadReportDetailByReportId(reportId){
  return await getReportDetailByReportId(api, reportId)
}

export async function loadReportDocByReportId(reportId){
  return await getReportDocByReportId(api, reportId)
}

export async function removeReportItemByReportItemId(reportId){
  return await deleteReportItemByReportItemId(api, reportId)
}

export async function serviceDeleteReportById(reportId){
  return await usecaseDeleteReportById(api, reportId)
}