const ctx = document.getElementById('graficoInstagram').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Usuários do Instagram (bilhões)',
            data: [1, 1.2, 1.5, 1.8, 2, 2.2, 2.4],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
        scales: {
            y: { beginAtZero: true },
        }
    }
});
