import { loadTopChartPieStatsIdByUserId } from '../../app/services/stats_service.js'
import { converterUcFirst } from '../../helper/converter.js'
import { generateSleepTime } from '../../helper/generator.js'

export async function renderTopChartPieStats(userId) {
    const chartList = [
        { holder : 'total-inventory-by-category-stats', context: 'category'},
        { holder : 'total-inventory-by-room-stats', context: 'room'},
        { holder : 'total-inventory-by-favorite-stats', context: 'favorite'},
        { holder : 'total-inventory-by-merk-stats', context: 'merk'}
    ]

    for (const el of chartList) {
        const holder = document.getElementById(el.holder)
        holder.innerHTML = ''

        try {
            const res = await loadTopChartPieStatsIdByUserId(userId, el.context)
            const data = res.data.data

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
                    text: `Total Inventory By ${converterUcFirst(el.context)}`
                },
                legend: {
                    position: 'bottom'  
                }
            }

            const chart = new ApexCharts(holder, options)
            chart.render()

            await generateSleepTime(750)
        } catch (err) {
            holder.innerHTML = `<p>${err}</p>`
        }
    }
}