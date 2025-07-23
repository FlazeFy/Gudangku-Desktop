import { loadDashboardByUserId } from '../../app/services/stats_service.js'
import { renderTopChartPieStats } from './user_top_chart_pie_stats_component.js'
import { renderMonthlyInventoryBarStats } from './user_inventory_monthly_bar_stats_component.js'
import { generateSleepTime } from '../../helper/generator.js'

export async function renderDashboardByUser(userId) {
    let holder = document.querySelector('#main-content')

    try {
        const res = await loadDashboardByUserId(userId)
        const data = res.data.data

        if(data.total_item > 0) {
            holder.innerHTML = `
                <div style="display: flex; flex-direction: column;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 1rem;">
                        <div class="container">
                            <h3>Total Items</h3>
                            <p>${data.total_item}</p>
                        </div>
                        <div class="container">
                            <h3>Favorite Items</h3>
                            <p>${data.total_fav}</p>
                        </div>
                        <div class="container">
                            <h3>Low Stock Items</h3>
                            <p>${data.total_low}</p>
                        </div>
                        <div class="container">
                            <h3>Last Added</h3>
                            <p>${data.last_added}</p>
                        </div>
                        <div class="container">
                            <h3>Top Category</h3>
                            <p>${data.most_category.context} (${data.most_category.total})</p>
                        </div>
                        <div class="container">
                            <h3>Highest Price</h3>
                            <p>${data.highest_price.inventory_name} - Rp ${data.highest_price.inventory_price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; padding: 1rem;">
                        <div class="container" style="text-align:center;" id="total-inventory-by-category-stats">Loading...</div>
                        <div class="container" style="text-align:center;" id="total-inventory-by-room-stats">Loading...</div>
                        <div class="container" style="text-align:center;" id="total-inventory-by-favorite-stats">Loading...</div>
                        <div class="container" style="text-align:center;" id="total-inventory-by-merk-stats">Loading...</div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 1rem; padding: 1rem;">
                        <div class="container" style="text-align:center;" id="inventory-monthly-stats">Loading...</div>
                    </div>
                </div>
            `
            
            renderTopChartPieStats(userId)
            await generateSleepTime(1000)
            renderMonthlyInventoryBarStats(userId)
        } else {
            holder.innerHTML = `
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}