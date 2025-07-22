import * as api from '../repositories/report_repository.js'
import { getReport } from '../usecases/report_usecase.js'

export async function loadReport(page = 1) {
  return await getReport(api, page)
}