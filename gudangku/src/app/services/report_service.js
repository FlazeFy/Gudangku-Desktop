import * as api from '../repositories/report_repository.js'
import { usecaseGetReport, usecaseGetReportDetailByReportId, usecaseGetReportDocByReportId, usecaseDeleteReportItemByReportItemId, usecaseDeleteReportById } from '../usecases/report_usecase.js'

export async function serviceLoadReport(page = 1) {
  return await usecaseGetReport(api, page)
}

export async function serviceLoadReportDetailByReportId(reportId){
  return await usecaseGetReportDetailByReportId(api, reportId)
}

export async function serviceLoadReportDocByReportId(reportId){
  return await usecaseGetReportDocByReportId(api, reportId)
}

export async function serviceRemoveReportItemByReportItemId(reportId){
  return await usecaseDeleteReportItemByReportItemId(api, reportId)
}

export async function serviceDeleteReportById(reportId){
  return await usecaseDeleteReportById(api, reportId)
}