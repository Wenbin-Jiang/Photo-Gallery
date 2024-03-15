$(document).ready(function () {
  $("#allbtn").click(function () {
    $(".image").fadeIn(1111);
  });

  $("#naturebtn").click(function () {
    $(".image").hide();
    $("[id=nature]").fadeIn(1111);
  });

  $("#citybtn").click(function () {
    $(".image").hide();
    $("[id=city]").fadeIn(1111);
  });

  $("#sportbtn").click(function () {
    $(".image").hide();
    $("[id=sport]").fadeIn(1111);
  });

  $(".image img").click(function () {
    let imgUrl = $(this).attr("src");
    $(".lightbox-img").attr("src", imgUrl);
    $(".lightbox").fadeIn();
  });

  $(".lightbox .close").click(function () {
    $(".lightbox").fadeOut();
  });

  $(".background-toggle").click(function () {
    $("body").toggleClass("dark-mode");
  });
});
