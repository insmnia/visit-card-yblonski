const ctx2 = document.getElementById('chart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: [
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
    ],
    datasets: [
      {
        label: 'Зачет',
        data: [21, 31, 25, 28, 31, 33, 33, 28, 27, 29],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderWidth: 1,
      },
      {
        label: 'Незачет',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        backgroundColor: ['rgba(146, 63, 235, 1)'],
        borderWidth: 1,
      },
    ],
  },
});
