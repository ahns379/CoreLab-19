$("body").css("transform", "perspective(10000px) rotateY(50deg)");
$("html").css("cssText", "margin-top: 5%; margin-left: -8%; width: 60%;");

var style = document.createElement("style");
document.body.appendChild(style).innerHTML = "
  * {
    transform-style: preserve-3d;
    transition: transform 1s;
    background-color: rgba(0, 0, 0, 0.03);
  }
  *:hover {
    transform: translateZ(100px);
  }
";

$("html").append("<div class='tag-name'></div>");

$("*").mouseover(function(event) {
  event.stopPropagation();
  var elementType = this.tagName;
  var ALL = $(this).parents().map(function () {
      return this.tagName;
    })
    .get()
    .join(" ");

  $(".tag-name").text("<" + elementType + "> \n" );

  $(".tag-name").append(ALL);

  $(".tag-name").css({
    "font-family": "monospace",
    "left": "160%" ,
    "font-size": "1.5em",
    "word-spacing": "100vw",
    "background-color": "rgb(41,44,52)",
		"color": "rgb(210,115,119)"
  });
  $(".tag-name").css("position","absolute");
  $(".tag-name").css("top",$(document).scrollTop() + "px");


});
