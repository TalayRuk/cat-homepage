$(document).ready(function() {

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#purple").click(function() {
    $("body").removeClass();
    $("body").addClass("purple-background");
  });
});
