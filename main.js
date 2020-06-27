
/* import {getTotalCasesByDate} from './utils.js' */
import data from './data.js';

function totalCasesChart(ctx) {
    const {confirmed, deaths, recovered} = data;
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: confirmed.map(item => Intl.DateTimeFormat('es-MX', {month: 'long', day: 'numeric'}).format(new Date(item.date))),
            datasets: [
                {
                    label: 'Muertes',
                    data: deaths.map(item => item.cases),
                    borderColor: 'red'
                },
                {
                    label: 'Recuperados',
                    data: recovered.map(item => item.cases),
                    borderColor: 'green'
                },
                {
                    label: 'Confirmados',
                    data: confirmed.map(item => item.cases),
                    borderColor: 'orange'
                },
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            title: {
                display: true,
                text: 'Todos los casos desde el primer reporte COVID-19',
                fontSize: 30,
                padding: 30,
                fontColor: '#12619c'
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    boxWidth: 15,
                    fontFamily: 'sistem-ui',
                    fontColor: 'black'
                }
            },
            layout: {
                padding: {
                    right: 50
                }
            },
            tooltips: {
                backgroundColor: '#0584f6',
                titleFontSize: 20,
                xPadding: 20,
                yPadding: 20,
                bodyFoontSize: 15,
                bodySpacing: 10,
                mode: 'x'
            },
            elements: {
                line: {
                    borderWidth: 8,
                    fill: false
                },
                point: {
                    radius: 6,
                    borderWidth: 4,
                    backgroundColor: 'white',
                    hoverRadius: 8,
                    hoverBorderWidth: 4
                }
            }
        }
    });
}

/* async  */function renderCharts() {
    const ctx = document.querySelector('#chart').getContext('2d');
/*     const data = await getTotalCasesByDate(); */
    totalCasesChart(/* data, */ ctx);
}

renderCharts();