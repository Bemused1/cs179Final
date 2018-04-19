
var navar = 0;
var savar = 0;
var africavar = 0;
var asiavar = 0;
var ausvar = 0;


window.onload = function() {
	var na = document.getElementById("na");
	var sa = document.getElementById("sa");
	var africa = document.getElementById("africa");
	var asia = document.getElementById("asia");
	var aus = document.getElementById("aus");
};

function onHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/greyNA.png" && navar == 0) {
			na.src = "icons/blackNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/greySA.png" && savar == 0) {
			sa.src = "icons/blackSA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/greyAFRICA.png" && africavar == 0) {
			africa.src = "icons/blackAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/greyASIA.png" && asiavar == 0) {
			asia.src = "icons/blackASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/greyAUS.png" && ausvar == 0) {
			aus.src = "icons/blackAUS.png";
		}
	}
};


function offHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/blackNA.png" && navar == 0) {
			na.src = "icons/greyNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/blackSA.png" && savar == 0) {
			sa.src = "icons/greySA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/blackAFRICA.png" && africavar == 0) {
			africa.src = "icons/greyAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/blackASIA.png" && asiavar == 0) {
			asia.src = "icons/greyASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/blackAUS.png" && ausvar == 0) {
			aus.src = "icons/greyAUS.png";
		}
	}
};


function clicked(num) {
	if (num == 1) {
		navar = 1;
		na.src = "icons/blackNA.png";
		alert("This is your passport. It will track your progress though Global Passport.");
	}
	else if (num == 2) {
		savar = 1;
		sa.src = "icons/blackSA.png";
		alert("Regions that you complete will be highlighted permanently. Uncompleted regions will remain grey.");
	}
	else if (num == 3) {
		africavar = 1;
		africa.src = "icons/blackAFRICA.png";
		alert("Complete regions by completing calls with students from those areas.");
	}
	else if (num == 4) {
		asiavar = 1;
		asia.src = "icons/blackASIA.png";
		alert("Complete extra calls, study hard, and you may earn some special badges!");
	}
	else {
		ausvar = 1;
		aus.src = "icons/blackAUS.png";
		alert("Once you've completed all regions, you will receive a special surprise!");
	}
};

