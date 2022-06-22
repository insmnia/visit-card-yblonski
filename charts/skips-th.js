const ctx4 = document.getElementById('chart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
  type: 'line',
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
        label: 'Часы',
        data: [0, 10, 14, 10, 0, 6, 30, 70, 86, 50],
        backgroundColor: ['rgba(0, 255, 0, 1)'],
        borderWidth: 1,
      },
    ],
  },
});
