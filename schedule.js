
//the function below stores user selected times in local storage for scheduling purposes. It also changes 
//button colour upon click, in order to visually register user input

function schedulebtnpress(day, time) {
	var templist = JSON.parse(localStorage.getItem('schedulelist'));
	console.log(templist);
	var changeid = day * 10 + time;
	var image =  document.getElementById(changeid.toString());
	if (image.getAttribute('src') == "icons/greenbtn.png") {
		templist[time-1][day-1] = 1;
	}
	else if (image.getAttribute('src') == "icons/greenbtncopy.png") {
		templist[time-1][day-1] = 0;
	}
	if (image.getAttribute('src') == "icons/greenbtn.png") {
    	image.src = "icons/greenbtncopy.png";
    }
    else {
    	image.src = "icons/greenbtn.png";
    }
    localStorage.setItem('schedulelist', JSON.stringify(templist));
};


window.onload = function() {
	var schedulelist = [[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0],
						[0,0,0,0,0,0,0]];
	localStorage.setItem('schedulelist', JSON.stringify(schedulelist));
};
