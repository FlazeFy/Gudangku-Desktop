import { serviceLoadDashboard } from "../../app/services/stats_service.js"

async function renderDashboard() {
    let holder = document.querySelector('#main-content')

    try {
        const res = await serviceLoadDashboard()

        if(res.status == 200) {
            const data = res.body.data

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
                </div>
            `
        } else {
            holder.innerHTML = `
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}

renderDashboard()