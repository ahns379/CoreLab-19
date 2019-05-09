
$( '.box_me_tag' ).on( "click", function() {
  $('.box_me').show();
  $('.box_me_tag').css({
    "font-size": "1.3em",
    "position": "fixed",
    "top": "0",
    "right": "0",
    "padding": "0",
    "z-index": "99999",
    "background-color": "white"
  });

  $('.box_we_tag').css({
    "font-size": ".7em",
    "padding": "0",
    "position": "fixed",
    "top": "62px",
    "right": "0",
    "z-index": "99999",
    "background-color": "white"
  });

  $('.box_friend, .box, .korea, .br').hide();
});


$( '.box_we_tag' ).on( "click", function() {
  $('.box_friend').show();
  $('.box_we_tag').css({
    "font-size": "1.3em",
    "position": "fixed",
    "top": "0",
    "right": "0",
    "padding": "0",
    "z-index": "99999",
    "background-color": "white"
  });

  $('.box_me_tag').css({
    "font-size": ".7em",
    "padding": "0",
    "position": "fixed",
    "top": "62px",
    "right": "0",
    "z-index": "99999",
    "background-color": "white"
  });
$('.box_me, .box, .korea, .br').hide();
});

setTimeout (function() {
  $('.gallery-slide, .calendardates').outerHeight(
    $('.gallery-slide, .calendardates').outerWidth()
  );
});



//citation https://www.jqueryscript.net/gallery/Accessible-Off-canvas-Grid-Gallery-with-jQuery-CSS3.html
var $asideTarget = $("#aside").find(".aside--details"),
		$tiles = $(".tiles-a").find("a");

		// tile click
		$tiles.on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if(!$("html").hasClass( "show-detail")){
				loadTileData($(this));
			}else{
				killAside();
			}
		});

		// load data to aside
		function loadTileData(target){
			var $this = $(target),
					itemHtml = $this.find(".details").html();
					$asideTarget.html(itemHtml);
					showAside();
		}

		// show/hide aside
		function showAside(){
			if(!$("html").hasClass( "show-detail")){
				$("html").toggleClass( "show-detail");
        $('.day').css({
          "opacity": "1",
          "color": "gray",
          "background-color": "lightgray"
        });

			}
		}

		// handle body click to close off-canvas
		$(this).on("click",function(e){
			if($("html").hasClass( "show-detail")){
					$("html").removeClass( "show-detail");
          $('.day').css({
            "opacity": "0.1",
            "background-color": "white",
            "color": "black"
          });
			}
		});
