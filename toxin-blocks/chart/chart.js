let data = {
  labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
  datasets: [{
    label: '# of Votes',
    data: [25, 25, 50, 0],
    backgroundColor: ['linear-gradient(blue, pink)', 'Blue', 'Yellow', 'Green'],
    borderWidth: 2,
    weight: 2
  }]
};

let options = {
  cutoutPercentage: 90,
  legend:{
    position: 'right',
    align: 'end'
  }
}


let doughnutChart = document.getElementById('doughnut').getContext('2d');
let roomRateChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: data,
  options: options
});