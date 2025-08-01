import { serviceLoadMonthlyInventoryBarStatsByUserId } from '../../app/services/stats_service.js'

export async function renderMonthlyInventoryBarStats(userId) {
    const holder = document.getElementById('inventory-monthly-stats')
    holder.innerHTML = ''

    try {
        const res = await serviceLoadMonthlyInventoryBarStatsByUserId(userId, 2025)

        if(res.status == 200){
            const data = res.body.data

            const labels = data.map(item => item.context)
            const series = data.map(item => item.total)

            const options = {
                chart: {
                    type: 'bar',
                    height: 350
                },
                series: [{
                    name: 'Total',
                    data: series
                }],
                xaxis: {
                    categories: labels
                },
                colors: ['#008FFB'],
                title: {
                    text: 'Monthly Inventory Total'
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false
                    }
                }
            }

            const chart = new ApexCharts(holder, options)
            chart.render()
        } else {
            holder.innerHTML = `
                <h6>Monthly Inventory Total</h6>
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}