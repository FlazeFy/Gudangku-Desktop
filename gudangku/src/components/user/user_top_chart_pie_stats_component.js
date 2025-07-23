import { loadTopChartPieStatsIdByUserId } from '../../app/services/stats_service.js'

export async function renderTopChartPieStats(userId) {
    const holder = document.getElementById('stats-content')
    holder.innerHTML = ''

    try {
        const res = await loadTopChartPieStatsIdByUserId(userId)
        const data = res.data

        const labels = data.map(item => item.context)
        const series = data.map(item => item.total)

        const options = {
            chart: {
                type: 'pie'
            },
            labels,
            series,
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
            title: {
                text: `Total Inventory By Category`
            }
        }

        const chart = new ApexCharts(holder, options)
        chart.render()
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}