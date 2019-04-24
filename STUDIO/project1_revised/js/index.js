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
