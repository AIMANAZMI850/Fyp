var doArr = [4.277619];
var phArr = [6.866733];
var orpArr = [169.880271];
var ecArr = [923.265912];
var tdsArr = [61.012885];
var waterTempArr = [24.352804];
var cdoArr = [1.704064];
var cphArr = [2.931005];
var corpArr = [2.104892];
var cecArr = [2.365782];
var ctdsArr = [2.335605];
var cwtArr = [3.107204];

var ctx = document.getElementById('myBarChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['DO', 'pH', 'ORP', 'EC', 'TDS', 'Water_Temp', 'CDO', 'CpH', 'CORP', 'CEC', 'CTDS', 'CWT'],
        datasets: [{
            label: 'Values',
            data: [
                doArr[0], phArr[0], orpArr[0], ecArr[0], tdsArr[0], waterTempArr[0], cdoArr[0], cphArr[0], corpArr[0], cecArr[0], ctdsArr[0], cwtArr[0]
            ],
            backgroundColor: [
                '#ff6384', '#36a2eb', '#ffce56', '#fd6b19', '#17a2b8', '#fd7e14', '#6f42c1', '#007bff', '#28a745', '#ffc107', '#dc3545', '#6c757d'
            ],
            borderColor: '#000000',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: false
    }
});
