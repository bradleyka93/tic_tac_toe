
$(document).ready(function (){
  console.log("ready");

var player = 1;

  $(".col").on("click", function(){
    var colClicked = $(this);
    if (player === 1) {
      $(colClicked).addClass("ex");
      player ++;
    } else {
      $(colClicked).addClass("oh");
      player --;
    }
  });
});
