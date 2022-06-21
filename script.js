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
$("#self-img-card").hover(() => {
  $('#self-img-card').animate({ width: '100%', height: '100%' }, 200);
}, () => {
  $('#self-img-card').animate({ width: '35%', height: '35%' }, 200);
});

$(document).ready(function () {
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

$(".profile-card-5").hover(()=>{
  $(".profile-card-5").css("background","whitesmoke");
},()=>{
  $(".profile-card-5").css("background","#E8E8E8")
})