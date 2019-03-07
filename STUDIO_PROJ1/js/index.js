var shuffle = [];
var All_Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/;\[]=-~!@#$%^&*()+{}:?><€¡¥×«»¶¿çµñ©æáßðøöóíúüþéåä";
var hover = false;
var out = [];

$('.shuffle_text').hover(function() {
  var times = 10;
  var arrangements = $(this).text().trim().split("");

  for(var i = 0; i < times; i++) {
    out.push(setTimeout(function(){
      for(var j = 0; j < 5; j++) {
        var random_characters = All_Characters.charAt(Math.floor(Math.random() * All_Characters.length));
        var index_characters = Math.floor(Math.random() * arrangements.length);
        arrangements[index_characters] = random_characters;
        var shuffled = arrangements.join("");
        $('a', this).text(shuffled);
      }
    }.bind(this), (i * 40)));
  };
}, function() {
  if(!hover) {
    $.each(out, function(i){
      clearTimeout(i);
    });
  }
});

document.addEventListener("scroll",function() {
    var topofpage =
      document.documentElement["scrollTop"] || document.body["scrollTop"];

    var bottomofpage =
      (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;

    scrollPercent = topofpage / bottomofpage * 100 + "%";
      document.getElementById("_progress")
      .style.setProperty("--scroll", scrollPercent);
  },
);

$(document).ready(function(){
  $("body").append("<div class = 'all'><div class ='new'></div></div>")
  $('.new').html(
  $('.library').html() + " " + $('.mirror').html() + " " + $('.hex').html() + " " + $('.librarian').html() + " " + $('.symbols').html() + " " + $('.infinite').html()+ " " +
  $('.narrator').html()+ " " +
  $('.purifiers').html()+ " " +
  $('.ManofBook').html()+ " " + $('.AxMl').html())

});
