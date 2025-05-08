"use strict";

const ctx = document.getElementById('myChart');

const centerTextPlugin = {
    id: 'centerText',
    beforeDraw(chart) {
        const { width } = chart;
        const { height } = chart;
        const ctx = chart.ctx;
        ctx.restore();

        const fontSize = (height / 100).toFixed(2);
        ctx.font = `${fontSize * 10}px Arial`;
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fff";
        const text = "10/40";
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
    }
};

const charts = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgba(129, 67, 191, 1)',
                'rgba(112, 135, 250, 1)',
                'rgba(112, 193, 250, 1)'
            ],
            hoverOffset: 3
        }]
    },
    options: {
        responsive: true,
        cutout: '80%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        },
        layout: {
            padding: 0
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }
    },
    plugins: [centerTextPlugin]
});

