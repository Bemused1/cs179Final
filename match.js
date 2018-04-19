
// this code fetches the schedule preferences from a previous screen and uses it to 'match' our user with a partner
// if this product were fully functioning, we would run a machine-learning algorithm to match partners based on 
// overlapping schedule times, as well as server strain, likelihood of cancellation, etc.


window.onload = function() {
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
		changediv.innerHTML = "<p> " + "Thanks for completing this process! We used the times that you selected in your schedule to match you with a partner. You will be chatting with Sarah on " + dayString + " in the " + timeString + " time slot. We hope that you're looking forward to it!" + " </p>";
	}
	else {
		changediv.innerHTML = "<p> " + "Oops! You didn't select any times in your schedule, so we couldn't find a time for you. Please update your schedule preferences later, and then we can proceed with finding you a partner and a workable time to chat!" + " </p>";
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