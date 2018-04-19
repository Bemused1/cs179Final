
//the function below stores user selected times in local storage for scheduling purposes. It also changes 
//button colour upon click, in order to visually register user input

function schedulebtnpress(day, time) {
	var templist = JSON.parse(localStorage.getItem('schedulelist'));
	console.log(templist);
	var changeid = day * 10 + time;
	var image = document.getElementById(changeid.toString());
	if (image.getAttribute('src') == "icons/greenbtn.png") {
		templist[time-1][day-1] = 1;
		image.src = "icons/greenbtncopy.png";
	}
	else {
		templist[time-1][day-1] = 0;
		image.src = "icons/greenbtn.png";
	}
    localStorage.setItem('schedulelist', JSON.stringify(templist));
};


window.onload = function() {
	var schedulelist = JSON.parse(localStorage.getItem('schedulelist'));
	var onlist = []
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 7; j++) {
			if (schedulelist[i][j] == 1) {
				var num = ((j+1) * 10) + (i+1);
				console.log(num);
				onlist.push(num);
			}
		}
	}
	for (var s = 0; s < onlist.length; s ++) {
		var image =  document.getElementById(onlist[s]);
		image.src = "icons/greenbtncopy.png";
	}
};
