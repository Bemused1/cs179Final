
window.onload = function() {
	var na = document.getElementById("na");
	var sa = document.getElementById("sa");
	var africa = document.getElementById("africa");
	var asia = document.getElementById("asia");
	var aus = document.getElementById("aus");
	var count = 1;
    localStorage.setItem('count', JSON.stringify(count));

};

function listenComplete() {
	if (window.confirm('Access demo page for completed passport?')) {
		window.location = 'completepassport.html';
	}
	else {
		die();
	}
	
};

function onHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/greyNA.png") {
			na.src = "icons/colorNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/greySA.png") {
			sa.src = "icons/colorSA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/greyAFRICA.png") {
			africa.src = "icons/colorAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/greyASIA.png") {
			asia.src = "icons/colorASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/greyAUS.png") {
			aus.src = "icons/colorAUS.png";
		}
	}
};


function offHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/colorNA.png") {
			na.src = "icons/greyNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/colorSA.png") {
			sa.src = "icons/greySA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/colorAFRICA.png") {
			africa.src = "icons/greyAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/colorASIA.png") {
			asia.src = "icons/greyASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/colorAUS.png") {
			aus.src = "icons/greyAUS.png";
		}
	}
};

function completeC(country) {
	var count = JSON.parse(localStorage.getItem('count'));
	if (country == 1){
		if (na.getAttribute('src') != "icons/completeNA.png") {
			count += 1;
		}
		na.src = "icons/completeNA.png";
	}
	else if (country == 2){
		if (sa.getAttribute('src') != "icons/completeSA.png") {
			count += 1;
		}
		sa.src = "icons/completeSA.png";
	}
	else if (country == 3){
		if (africa.getAttribute('src') != "icons/completeAFRICA.png") {
			count += 1;
		}
		africa.src = "icons/completeAFRICA.png";
	}
	if (country == 4){
		if (asia.getAttribute('src') != "icons/completeASIA.png") {
			count += 1;
		}
		asia.src = "icons/completeASIA.png";
	}
	if (country == 5){
		if (aus.getAttribute('src') != "icons/completeAUS.png") {
			count += 1;
		}
		aus.src = "icons/completeAUS.png";
	}
	localStorage.setItem('count', JSON.stringify(count));
	if (count == 5) {
		listenComplete();
	}
};