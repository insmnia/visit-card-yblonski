function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    1000
  );
  return false;
}

function someFact() {}

document.querySelector(".btn-primary").addEventListener("click",() => {
  let facts = [
    "Поджег мусорку бытовых отходов в 4 классе, но не спалили",
    "До 12 лет считал, что если человек носит очки, то у него большие проблемы со здоровьем",
    "Самый используемый никнейм <i>horekih</i>",
    "Не ставлю сложные пароли",
    "Являюсь лидом на проекте в специализации, с который опыта всего 1 месяц"
  ];
  new Noty({
    text: facts[Math.floor(Math.random() * facts.length)],
    theme: 'mint',
    layout:'bottomCenter',
    type:'info',
    timeout:1000
  }).show();
});
