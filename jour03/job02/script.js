$(document).ready(function () {

  let randomImage = ['.img1', '.img2', '.img3', '.img4', '.img5', '.img6'];

  $(".img1").on("click", function () {
    $(".img1").prependTo(".arc_contain");
  });
  $(".img2").on("click", function () {
    $(".img2").prependTo(".arc_contain");
  });
  $(".img3").on("click", function () {
    $(".img3").prependTo(".arc_contain");
  });
  $(".img4").on("click", function () {
    $(".img4").prependTo(".arc_contain");
  });
  $(".img5").on("click", function () {
    $(".img5").prependTo(".arc_contain");
  });
  $(".img6").on("click", function () {
    $(".img6").prependTo(".arc_contain");
  });

  $("#mix").on("click", function () {

    for (let i = 0; i < 50; i++) {
      $(".img" + (Math.floor(Math.random() * 6) + 1)).prependTo(".arc_mix");
    }

  });

});