function localTime () {
	const d = new Date();
	document.getElementById("date").innerHTML = (d.toDateString()).toUpperCase() + ", " +
	hours(d.getHours()) + ":" + minutes(d.getMinutes()) + timetype(d.getHours());
}


setInterval(localTime, 0);
function hours(value) {
	if (value < 10) { return "0" + value;}
	if (value > 12 && value < 22) {return "0" + (value - 12);}
	if (value >= 22) {return value - 12;}
	else return value;
}

function minutes(value) {
	if (value < 10) { return "0" + value;}
	else return value;
}
function timetype(value) {
	if (value < 12) { return " AM";}
	else return " PM";
}

function lightmode() {
	document.body.style.backgroundColor = 'rgb(210, 210, 220)';
	const h3 = document.querySelectorAll('h3');
        h3.forEach(element => {element.style.color = 'rgba(0, 0, 0, 0.75)';});
	document.getElementById("date").style.color = 'black';
	const a = document.querySelectorAll('.name h3');
	a.forEach(element => {element.style.color = 'black';});
	const h2 = document.querySelectorAll('h2');
        h2.forEach(element => {element.style.color = 'black';});
	h2.forEach(element => {element.style.opacity = '0.4';});
	var mastery = document.getElementById("mastery");
        mastery.style.backgroundColor = "rgb(20, 20, 30)";
	var abtme = document.getElementById("abtme");
        abtme.style.backgroundColor = "rgb(20, 20, 30)";
	var welcome = document.getElementById("welcome");
        welcome.style.backgroundColor = "rgb(20, 20, 30)";
	var footer = document.getElementById("footer");
        footer.style.backgroundColor = "rgb(20, 20, 30)";
	document.getElementById("credits").style.color = 'black';
	document.getElementById("samples").style.color = 'black';
	document.getElementById("lord").style.backgroundColor = 'rgb(40, 40, 60)';
}
function darkmode() {
	document.body.style.backgroundColor = 'rgba(5, 0, 13, 0.95)';
	const h3 = document.querySelectorAll('h3');
        h3.forEach(element => {element.style.color = 'rgba(255, 255, 255, 0.6)';});
	document.getElementById("date").style.color = 'white';
	const a = document.querySelectorAll('.name h3');
	a.forEach(element => {element.style.color = 'white';});
	const h2 = document.querySelectorAll('h2');
        h2.forEach(element => {element.style.color = 'white';});
	h2.forEach(element => {element.style.opacity = '0.05';});
	var mastery = document.getElementById("mastery");
        mastery.style.backgroundColor = "rgb(20, 20, 30)";
	var abtme = document.getElementById("abtme");
        abtme.style.backgroundColor = "rgb(20, 20, 30)";
	var welcome = document.getElementById("welcome");
        welcome.style.backgroundColor = "rgb(20, 20, 30)";
	var footer = document.getElementById("footer");
        footer.style.backgroundColor = "rgb(20, 20, 30)";
	document.getElementById("credits").style.color = 'grey';
	document.getElementById("samples").style.color = 'white';
	document.getElementById("lord").style.backgroundColor = 'white';
}
