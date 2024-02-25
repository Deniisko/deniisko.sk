// Pri prejdení kurzorom nad prvkom
$(".hover").on("mouseenter", function () {
    $(this).addClass("hover");
  });
  
  // Pri opustení prvku
  $(".hover").on("mouseleave", function () {
    $(this).removeClass("hover");
  });
  
  // Pri kliknutí na obrázok s .hover
  $(".hover").on("click touchstart", function(event) {
    // Zrušíme predvolené správanie
    event.preventDefault();
    
    // Pridáme triedu hover
    $(this).addClass("hover");
  });

// ¨firework
