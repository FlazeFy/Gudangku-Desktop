import * as api from '../repositories/inventory_repository.js'
import { getInventory, getInventoryDocByInventoryId  } from '../usecases/inventory_usecase.js'

export async function loadInventory(page = 1) {
  return await getInventory(api, page)
}

export async function loadInventoryDocByInventoryId(inventoryId){
  return await getInventoryDocByInventoryId(api, inventoryId)
}