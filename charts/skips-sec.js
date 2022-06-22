const ctx3 = document.getElementById('chart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
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
        data: [0, 1, 2, 0, 3, 0, 4, 0, 0, 2],
        backgroundColor: ['rgba(0, 0, 255, 1)'],
        borderWidth: 1,
      }
    ],
  },
});
