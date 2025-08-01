import * as api from '../repositories/inventory_repository.js'
import { usecaseGetInventory, usecaseGetInventoryDocByInventoryId, usecaseSoftDeleteInventoryById, usecaseRecoverInventoryById, usecaseHardDeleteInventoryById } from '../usecases/inventory_usecase.js'

export async function serviceLoadInventory(page = 1) {
  return await usecaseGetInventory(api, page)
}

export async function serviceLoadInventoryDocByInventoryId(inventoryId){
  return await usecaseGetInventoryDocByInventoryId(api, inventoryId)
}

export async function serviceSoftDeleteInventoryById(inventoryId){
  return await usecaseSoftDeleteInventoryById(api, inventoryId)
}

export async function serviceHardDeleteInventoryById(inventoryId){
  return await usecaseHardDeleteInventoryById(api, inventoryId)
}

export async function serviceRecoverInventoryById(inventoryId){
  return await usecaseRecoverInventoryById(api, inventoryId)
}