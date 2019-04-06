
var active = keyNumber => {
	var pianoNotes = document.querySelector(`.note__${keyNumber}`)
	var key = document.querySelector(`.code__${keyNumber}`)
	pianoNotes.play();
	pianoNotes.currentTime = 0;
}
document.addEventListener("keydown", e => active(e.keyCode))

function randomInt(input){
	var rand = Math.random() * input;
	rand = parseInt(rand);
	return rand;
}


function type(event){
	$("h1").addClass("fade");
	var letters = document.createElement("h2");
	var w = window.innerWidth;
	var h = window.innerHeight;
	letters.innerHTML = event.key;
	letters.style.top = randomInt(h) + "px";
	letters.style.left = randomInt(w) + "px";
<<<<<<< HEAD
  $("h2").addClass("animate");
  document.body.append(letters);
=======
	$("h2").addClass("animate");
	document.body.appendChild(letters);
>>>>>>> 1ce10e8e6c08bc0208e429177e7511903fc227be
}
document.onkeypress = type;
