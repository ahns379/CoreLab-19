var active = keyNumber => {
	var pianoNotes = document.querySelector(`.note__${keyNumber}`)
	var key = document.querySelector(`.code__${keyNumber}`)
	pianoNotes.play();
	pianoNotes.currentTime = 0;
}
window.addEventListener("keydown", e => active(e.keyCode))


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
	$("h2").addClass("animate");
	document.body.appendChild(letters);
}
document.onkeypress = type;
