export async function getInventory(api, page) {
    return await api.fetchInventory(page)
}
export async function getInventoryDocByInventoryId(api, inventoryId) {
    return await api.fetchInventoryDocByInventoryId(inventoryId)
  }