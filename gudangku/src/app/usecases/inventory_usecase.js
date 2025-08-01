export async function usecaseGetInventory(api, page) {
    return await api.repoFetchInventory(page)
}

export async function usecaseGetInventoryDocByInventoryId(api, inventoryId) {
    return await api.repoFetchInventoryDocByInventoryId(inventoryId)
}

export async function usecaseSoftDeleteInventoryById(api, inventoryId) {
    return await api.repoSoftDeleteInventoryById(inventoryId)
}

export async function usecaseHardDeleteInventoryById(api, inventoryId) {
    return await api.repoHardDeleteInventoryById(inventoryId)
}

export async function usecaseRecoverInventoryById(api, inventoryId) {
    return await api.repoRecoverInventoryById(inventoryId)
}