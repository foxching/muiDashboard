import { Chart, registerables } from 'chart.js'

export const DisplayCardGraph = ({ id, data, brColor, bgColor }) => {
    var ctx = document.getElementById(id).getContext('2d');
    Chart.register(...registerables)

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: 'mychart',
            datasets: [{
                label: id,
                data: data,
                fill: true,
                borderColor: brColor,
                backgroundColor: bgColor,
                tension: 0.5
            }]
        },
        options: {
            scales: {
                x: {
                    display: false,
                    title: { display: false }
                },
                y: {
                    display: false,
                    title: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            },
            responsive: true,
            maintainAspectRatio: true
        },

    });
    return myChart
}
