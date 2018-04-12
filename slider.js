
// This code fetches the values from the sliding form and displays it

window.onload = function() {
	var slider1 = document.getElementById("slide1");
	var slider2 = document.getElementById("slide2");
	var slider3 = document.getElementById("slide3");

	var output1 = document.getElementById("slide1output");
	var output2 = document.getElementById("slide2output");
	var output3 = document.getElementById("slide3output");
	output1.innerHTML = slider1.value; 
	output2.innerHTML = slider2.value; 
	output3.innerHTML = slider3.value; 
	slider1.oninput = function() {
    	output1.innerHTML = this.value;
	}

	slider2.oninput = function() {
    	output2.innerHTML = this.value;
	}

	slider3.oninput = function() {
    	output3.innerHTML = this.value;
	}
};


