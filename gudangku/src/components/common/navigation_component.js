document.getElementById('btn-user-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('user_page.html')
})
document.getElementById('btn-inventory-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('inventory_page.html')
})
document.getElementById('btn-report-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('report_page.html')
})
document.getElementById('btn-history-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('history_page.html')
})
document.getElementById('btn-stats-page').addEventListener('click', () => {
    window.electronAPI.navigateTo('stats_page.html')
})