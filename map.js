
window.onload = function() {
	var na = document.getElementById("na");
	var sa = document.getElementById("sa");
	var africa = document.getElementById("africa");
	var asia = document.getElementById("asia");
	var aus = document.getElementById("aus");
	var count = 0;
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
		if (na.getAttribute('src') == "icons/blackNA.png") {
			na.src = "icons/whiteNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/blackSA.png") {
			sa.src = "icons/whiteSA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/blackAFRICA.png") {
			africa.src = "icons/whiteAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/blackASIA.png") {
			asia.src = "icons/whiteASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/blackAUS.png") {
			aus.src = "icons/whiteAUS.png";
		}
	}
};


function offHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/whiteNA.png") {
			na.src = "icons/blackNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/whiteSA.png") {
			sa.src = "icons/blackSA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/whiteAFRICA.png") {
			africa.src = "icons/blackAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/whiteASIA.png") {
			asia.src = "icons/blackASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/whiteAUS.png") {
			aus.src = "icons/blackAUS.png";
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