const ctx = document.getElementById('chart1').getContext('2d');
const myChart = new Chart(ctx, {
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
        data: [20, 21, 22, 24, 23, 25, 20, 21, 25, 30],
        backgroundColor: ['rgba(40, 209, 235, 1)'],
        borderWidth: 1,
      },
      {
        label: 'Незачет',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ['rgba(146, 63, 235, 1)'],
        borderWidth: 1,
      },
    ],
  },
});
