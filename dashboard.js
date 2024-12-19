// Data for Charts
const ageWiseData = [27, 25, 23, 23, 18]; // Example data
const disposalData = [25000, 23000, 20000, 19876]; // Example data
const casesFiledByWomen = [50435, 150000]; // Example data
const casesFiledBySeniorCitizens = [24567, 200000]; // Example data
const contestedData = [7500, 4821]; // Example data
const casesListedToday = [1000, 500]; // Example data

// Age-wise Pending Cases Bar Chart
const ageWiseCtx = document.getElementById('ageWisePendingCasesChart').getContext('2d');
new Chart(ageWiseCtx, {
    type: 'bar',
    data: {
        labels: ['< 1 Year', '1-2 Years', '2-3 Years', '3-5 Years', '> 5 Years'],
        datasets: [{
            label: 'Pending Cases',
            data: ageWiseData,
            backgroundColor: '#36a2eb',
            borderColor: '#36a2eb',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return ` ${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Disposal in Last Month Histogram
const disposalCtx = document.getElementById('disposalLastMonthChart').getContext('2d');
new Chart(disposalCtx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Disposals',
            data: disposalData,
            backgroundColor: '#ff6384',
            borderColor: '#ff6384',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return ` ${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Cases Filed by Women Pie Chart
const womenCasesCtx = document.getElementById('casesFiledByWomenChart').getContext('2d');
new Chart(womenCasesCtx, {
    type: 'pie',
    data: {
        labels: ['Filed by Women', 'Other Cases'],
        datasets: [{
            data: casesFiledByWomen,
            backgroundColor: ['#ffcc70', '#7289da'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Cases Filed by Senior Citizens Pie Chart
const seniorCasesCtx = document.getElementById('casesFiledBySeniorCitizensChart').getContext('2d');
new Chart(seniorCasesCtx, {
    type: 'pie',
    data: {
        labels: ['Filed by Senior Citizens', 'Other Cases'],
        datasets: [{
            data: casesFiledBySeniorCitizens,
            backgroundColor: ['#36a2eb', '#ff6384'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Contested vs Uncontested Cases Chart
const contestedCtx = document.getElementById('contestedUncontestedChart').getContext('2d');
new Chart(contestedCtx, {
    type: 'bar',
    data: {
        labels: ['Contested', 'Uncontested'],
        datasets: [{
            label: 'Cases',
            data: contestedData,
            backgroundColor: ['#ffcc70', '#36a2eb'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Cases Listed Today Chart
const listedTodayCtx = document.getElementById('casesListedTodayChart').getContext('2d');
new Chart(listedTodayCtx, {
    type: 'pie',
    data: {
        labels: ['Contested', 'Uncontested'],
        datasets: [{
            data: casesListedToday,
            backgroundColor: ['#ffcc70', '#36a2eb'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});
