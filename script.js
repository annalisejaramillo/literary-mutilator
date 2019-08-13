window.onload = function () {
	textBackground(); largeText();
};


function largeText () {
	document.getElementById("myp2").style.fontSize = "xx-large";
}

function textBackground () {
	document.getElementById("myP").style.backgroundColor = "orange";
}


function pressHere () {
	myP3.textContent += 'Do you love TACOS? ';
}

window.addEventListener ("keyup", function(){
	pressHere ()
});

function pressNow () {
	myP3.textContent += 'I LOVE TACOS?????????          ';
}

window.addEventListener ("keydown", function(){
	pressNow ()
});

function changeUp() {
	var og = document.getElementById("myp2").innerHTML;
	var replace = og.replace("tacos", "TACCCOOOOOS!!!!!!!!!!!");
	document.getElementById("myp2").innerHTML = replace;
}

window.addEventListener ("click", function(){
	changeUp ()
});