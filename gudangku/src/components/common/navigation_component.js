document.getElementById('btn-user-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('user_page.html')
})
document.getElementById('btn-inventory-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('inventory_page.html')
})
document.getElementById('btn-report-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('report_page.html')
})