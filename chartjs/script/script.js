/**
 * Created by Mamun Morshed on 2/9/2017.
 */


var chartone = document.querySelectorAll('.chartone')[0];
new Chart(chartone, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            bordeWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            labels:{
                fontStyle: "italic"
            }
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var charttwo = document.querySelectorAll('.charttwo')[0];
new Chart(charttwo, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chartthree = document.querySelectorAll('.chartthree')[0];
new Chart(chartthree, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            fill: false,
            pointRadius: 0,
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 3
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var chartfour = document.querySelectorAll('.chartfour')[0];
new Chart(chartfour, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of votes',
            data: [12, 19, 2, 5, 3, 3],
            fill: true,
            pointRadius: 0,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 0)',
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var chartfive = document.querySelectorAll('.chartfive')[0];
new Chart(chartfive, {
    type: 'radar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of 1st round votes',
            data: [12, 19, 22, 25, 13, 30],
            fill: true,
            pointRadius: 0,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 0)',
            borderWidth: 1
        },
        {
            label: '# of 2nd round votes',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            pointRadius: 0,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 0.0)',
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});


var chartsix = document.querySelectorAll('.chartsix')[0];
new Chart(chartsix, {
    type: 'radar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[{
            label: '# of 1st round votes',
            data: [12, 19, 22, 25, 13, 30],
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            borderDash: [5,2],
            pointRadius: 3,
            pointBorderColor: 'rgba(153, 102, 255, 1)',
            pointBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointStyle: 'circle'
        },
        {
            label: '# of 2nd round votes',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            borderDash: [5,2],
            pointRadius: 3,
            pointBorderColor:  'rgba(255, 206, 86, 1)',
            pointBackgroundColor:  'rgba(255, 206, 86, 1)',
            pointStyle: 'circle'
        }]
    },
    options: {
        title:{
            display: true,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: false,
            position:'bottom'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var chartseven = document.querySelectorAll('.chartseven')[0];
new Chart(chartseven, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[
        {
            type: 'line',
            label: '# of 2nd round votes',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
            borderDash: [5,2],
            pointRadius: 3,
            pointBorderColor:  'rgba(255, 206, 86, 1)',
            pointBackgroundColor:  'rgba(255, 206, 86, 1)',
            pointStyle: 'circle'
        },{
                type: 'bar',
                label: '# of 1st round votes',
                data: [12, 19, 22, 25, 13, 30],
                fill: true,
                backgroundColor: 'rgba(153, 102, 255, 1)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
    },
    options: {
        title:{
            display: false,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: true,
            position:'top'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});


var charteight = document.querySelectorAll('.charteight')[0];
new Chart(charteight, {
    type: 'polarArea',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[
        {
            label: 'My Data-set',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: false,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: true,
            position:'top'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true,
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var chartnine = document.querySelectorAll('.chartnine')[0];
new Chart(chartnine, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[
        {
            label: 'My Data-set',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            hoverBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: false,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: true,
            position:'top'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true
    }

});


var chartten = document.querySelectorAll('.chartten')[0];
new Chart(chartten, {
    type: 'doughnut',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[
        {
            label: 'My Data-set',
            data: [32, 9, 20, 15, 30, 13],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: false,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: true,
            position:'top'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true
    }

});

var charteleven = document.querySelectorAll('.charteleven')[0];
new Chart(charteleven, {
    type: 'bubble',
    data: {
        labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Cyan"],
        datasets:[
        {   label: 'My Data-set',
            data:  [{x: 10, y:1, r:5},
                    {x: 5, y:35, r:10},
                    {x: 10, y:35, r:8},
                    {x: 20, y:3, r:15},
                    {x: 5, y:19, r:9},
                    {x: 30, y:50, r:11}
                ],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderWidth: 1
        },
        {   label: 'My Data-set',
            data:  [{x: 5, y:19, r:9},
                    {x: 20, y:3, r:15},
                    {x: 1, y:20, r:10},
                    {x: 20, y:45, r:8},
                    {x: 10, y:1, r:5},
                    {x: 20, y:30, r:11}
                ],
            fill: true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title:{
            display: false,
            text: 'my chart work',
            position: 'bottom'
        },
        legend: {
            display: true,
            position:'top'
        },
        hover: {
            mode: 'nearest'
        },
        responsive: true
    }

});

