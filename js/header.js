$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
      $(".navbar").addClass("dark-header");
    } else {
      $(".navbar").removeClass("dark-header");
    }
  })
})