import * as api from '../repositories/inventory_repository.js'
import { getInventory } from '../usecases/inventory_usecase.js'

export async function loadInventory(page = 1) {
  return await getInventory(api, page)
}