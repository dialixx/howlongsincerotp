const from1970torotp = 1577232000000;
const from1970torelease = 1496790000000;

const d = new Date();

let since1970 = d.getTime();


setInterval(function() {
	
	let sincerotp = Math.round((since1970 - from1970torotp) / (10000 * 360 * 24) - 0.5);
	
	let sincerelease = Math.round((since1970 - from1970torelease) / (10000 * 360 * 24) - 0.5);
	
	
	document.getElementById("days").innerHTML = sincerotp + " days";
	
	document.getElementById("days2").innerHTML = sincerelease + " days";
	
}, 1);
