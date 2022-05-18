const from1970torotp = 1577232000000;

const d = new Date();

let since1970 = d.getTime();


setInterval(function() {
	
	let sincerotp = Math.round((since1970 - from1970torotp) / (10000 * 360 * 24) - 0.5);
	
	document.getElementById("days").innerHTML = sincerotp + " days";
	
}, 1);