var prev = document.getElementById("prev");
var next = document.getElementById("next");
var car = document.getElementsByClassName("car");
var imgs = car[0].getElementsByTagName("img");
var i= 0;
next.onclick =function() {
	i++;
	if (i > imgs.length-1) {
		i=0;
	}
	for(var j=0; j<imgs.length; j++ ){
		imgs[j].style.opacity = "0";
	}
	imgs[i].style.opacity = "1";
}
prev.onclick = function() {
	i--;
	if (i < 1) {
		i=imgs.length-1;
	}
	for(var j=0; j<imgs.length; j++ ) {
		imgs[j].style.opacity = "0";
	}
	imgs[i].style.opacity = "1";
}
