
window.onload = function() {
	var na = document.getElementById("na");
	var sa = document.getElementById("sa");
	var africa = document.getElementById("africa");
	var asia = document.getElementById("asia");
	var aus = document.getElementById("aus");
	var schedulelist = JSON.parse(localStorage.getItem('schedulelist'));
	console.log(schedulelist);
	var changediv = document.getElementById('connectedwithsarahtext');
	var day = -1;
	var time = -1;
	loop1:
		for (var i = 0; i < 8; i++) {
	loop2:
			for (var j = 0; j < 7; j ++) {
				if (schedulelist[i][j] == 1) {
					day = j;
					time = i;
					break loop2;
				}
			}
		}
	if (day >= 0 && time >= 0) {
		var dayString = translateday(day);
		var timeString = translatetime(time);
		localStorage.setItem('dayString', dayString);
		localStorage.setItem('timeString', timeString);
	}
};

function translateday(day) {
	var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	return days[day];
}

function translatetime(time) {
	var times = ['10-11', '11-12', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'];
	return times[time];
}

function onHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/whiteNA.png") {
			na.src = "icons/greyNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/whiteSA.png") {
			sa.src = "icons/greySA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/whiteAFRICA.png") {
			africa.src = "icons/greyAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/whiteASIA.png") {
			asia.src = "icons/greyASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/blackAUS.png") {
			aus.src = "icons/blackAUS.png";
		}
	}
};


function offHover(country) {
	if (country == 1){
		if (na.getAttribute('src') == "icons/greyNA.png") {
			na.src = "icons/whiteNA.png";
		}
	}
	else if (country == 2){
		if (sa.getAttribute('src') == "icons/greySA.png") {
			sa.src = "icons/whiteSA.png";
		}
	}
	else if (country == 3){
		if (africa.getAttribute('src') == "icons/greyAFRICA.png") {
			africa.src = "icons/whiteAFRICA.png";
		}
	}
	if (country == 4){
		if (asia.getAttribute('src') == "icons/greyASIA.png") {
			asia.src = "icons/whiteASIA.png";
		}
	}
	if (country == 5){
		if (aus.getAttribute('src') == "icons/blackAUS.png") {
			aus.src = "icons/blackAUS.png";
		}
	}
};


function clicked(num) {
	if (num < 5) {
		alert("You have no call scheduled for this region. Please complete your current call and we'll schedule a new one!");
	}
	else {
		var dayString = localStorage.getItem('dayString');
		var timeString = localStorage.getItem('timeString');
		if (dayString == null || timeString == null) {
			alert("We don't have schedule information for you, so we haven't scheduled your call. Please update your schedule information on your profile page, and we'll schedule a call right away!");
		}
		else {
			alert("Your call for this region is scheduled for " + dayString + " at " + timeString + ". We hope that you're looking forward to it!");
		}
	}
};



