$("ul").on("click", "li", function() {
  $(this).toggleClass("crossedout");
});

$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

$(".fa-pencil").on("click", function() {
  $("input").fadeToggle();
});

$("input[type='text']").keypress(function(e) {
  $(this).fadeIn(500, function() {
    if (e.which === 13) {
      var text = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-times'></i></span> " + text + "</li>");
    }
  });
});
