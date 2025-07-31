import * as api from '../repositories/inventory_repository.js'
import { usecaseGetInventory, usecaseGetInventoryDocByInventoryId  } from '../usecases/inventory_usecase.js'

export async function serviceLoadInventory(page = 1) {
  return await usecaseGetInventory(api, page)
}

export async function serviceLoadInventoryDocByInventoryId(inventoryId){
  return await usecaseGetInventoryDocByInventoryId(api, inventoryId)
}