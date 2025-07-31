import { serviceLoadMonthlyReportCreatedBarStatsByUserId } from '../../app/services/stats_service.js'

export async function renderMonthlyReportCreatedBarStats(userId) {
    const holder = document.getElementById('report-created-monthly-stats')
    holder.innerHTML = ''

    try {
        const res = await serviceLoadMonthlyReportCreatedBarStatsByUserId(userId, 2025)

        if(res.status == 200){
            const data = res.data.data

            const labels = data.map(item => item.context)
            const totalReports = data.map(item => item.total_report)
            const totalItems = data.map(item => item.total_item)

            const sumReports = totalReports.reduce((acc, val) => acc + val, 0)
            const sumItems = totalItems.reduce((acc, val) => acc + val, 0)

            const series = sumReports >= sumItems
                ? [
                    { name: 'Total Item', type: 'column', data: totalItems },
                    { name: 'Total Report', type: 'line', data: totalReports }
                ]
                : [
                    { name: 'Total Report', type: 'column', data: totalReports },
                    { name: 'Total Item', type: 'line', data: totalItems }
                ]

            const options = {
                series,
                chart: {
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: false
                    },
                    zoom: false
                },
                stroke: {
                    width: [0, 4],
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels,
                colors: ['#00E396', '#008FFB'],
                title: {
                    text: 'Total Report Created Per Month'
                },
                legend: {
                    position: 'bottom'
                },
                yaxis: {
                    labels: {
                        formatter: value => value >= 1000 ? (value / 1000).toFixed(1) + 'K' : value
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4
                    }
                }
            }

            const chart = new ApexCharts(holder, options)
            chart.render()
        } else {
            holder.innerHTML = `
                <h6>Total Report Created Per Month</h6>
                <div style="text-align: center;"><img src="assets/search.png" class="img"/><br><h6>Not enough data to show</h6></div>
            `
        }
    } catch (err) {
        holder.innerHTML = `<p>${err}</p>`
    }
}