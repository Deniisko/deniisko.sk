/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  
  $(".hover").on("mouseenter touchstart", function () {
    $(this).addClass("hover");
  });
  
  // Pri opustení prvku
  $(".hover").on("mouseleave touchend", function () {
    $(this).removeClass("hover");
  });