let chart1 = document.getElementById("chart1").getContext("2d");
let chart2 = document.getElementById("chart2").getContext("2d");
let chart3 = document.getElementById("chart3").getContext("2d");

//global chart options
Chart.defaults.global.defaultFontSize = 14;
//charts, graphs made up data

//chart1 

let data1 = new Chart(chart1, {
	type: "line",
	data: {
		labels: ["16 - 22", "23 - 29", "30 - 35", "35 - 41", " 41 - 47", "48 - 54", "55+"],

		datasets: [{
			label: "Monthly",
			data:[190 , 300,  555, 600, 295, 280, 80],
			backgroundColor: "rgba(	83, 78, 114, .5 )",
			borderWidth: 2,
			borderColor: "rgba(	83, 78, 114)",
			lineTension: .1
		},
		{
			label: "Weekly",
			data:[85 , 200,  194, 195, 115, 40, 38],
			backgroundColor: "rgba(	85, 58, 154, .3 )",
			borderWidth: 2,
			borderColor: "rgba(	83, 78, 114)",
			lineTension: .1
		},
		{
			label: "Daily",
			data:[30 , 55,  33, 49, 15, 10, 8],
			backgroundColor: "rgba(	85, 98, 154, .6)",
			borderWidth: 2,
			borderColor: "rgba(	83, 78, 114)",
			lineTension: .1
		}
		]
	},
	options: {
		responsive: true,
		title:{
			display: true,
			text: "User Traffic Based on Age",
			fontSize: 16
		},
		legend: {
			display: true,
			position: "right",
			labels: {
				fontColor: "black"
			}
		},
		tooltips: {
			enabled: true
		}
	}
});

//chart2

let  dailyTraffic = new Chart (chart2, {
	type: "bar",
	data: {
		labels: ["M", "T", "W", "Th", "F", "S", "Su"],
		datasets: [{
			label: "Daily Traffic",
			data:[184, 345, 435, 436, 351, 299, 390],
			backgroundColor: "rgba(70, 130, 180, .4)"
		}]
	},
	options: {
		responsive: true
	}
});

//chart 3
let  deviceData = new Chart (chart3, {
	type: "doughnut",
	data: {
		labels: ["Mobile", "Tablet", "Desktop"],
		datasets: [{
			label: "User Device Type",
			data:[1054, 309, 1076],
			backgroundColor: [
			"rgba(70, 130, 180, .4)",
			"rgba(70, 80, 180, .4)",
			"rgba(70, 200, 150, .4)"
			]
		}]
	},
	options: {
		responsive: true,
		title:{
			display: true,
			text: "User Access by Device Type",
			fontSize: 16
		},
		cutoutPercentage: 45
	}
});

//varibales not related to chart 

const exit = document.getElementById("exit")
const alertBox = document.querySelector(".alertBox")

//removes alert box on dashboard when x cliked 
//possibly animate? 
exit.addEventListener("click", ()=> {
	alertBox.style.display = "none";
	})



//click bell icon removes green notification dot
const greenDot = document.querySelector(".greenDot");
const bell = document.querySelector(".bell");
const alertNotifications = document.querySelector(".alertNotifications");
const alertCircle = document.querySelectorAll(".alertCircle");

//notifications bell actions
function toggleNotifications(items){
	items.style.display = "block";
}
function removeNotifications(items){
	items.style.display = "none";
}

//toggles notifciations, removes green indication
bell.addEventListener("click", () => {
	if(alertNotifications.style.display == "none"){
		toggleNotifications(alertNotifications);		
		greenDot.style.display = "none";
	}
	else {
		removeNotifications(alertNotifications);
	}
});

//removes a notification when the x  is clicked (add transition?)
for (let i = 0 ; i < alertCircle.length ; i++) {
	alertCircle[i].addEventListener("click", () =>{
		alertCircle[i].parentNode.remove()
	})
}


//simulate submitting message form, required fields, etc.
const send  = document.querySelector(".send");
const form  =  document.querySelector(".form");
const successMessage =  document.querySelector(".successMessage")
const requireMessage =  document.querySelector(".requireMessage")


form.addEventListener("submit", (e) => {
		const textarea = document.querySelector("textarea");
		const forminput = document.querySelector(".forminput");

		//if value has no length (nothing in input)
		if (textarea.value.length == 0 || forminput.value.length == 0){
				e.preventDefault();
				//styles required input box
				forminput.style.borderColor = "red";
				textarea.style.borderColor = "red";
				requireMessage.style.display = "block";

				//adds required text keyframe
				requireMessage.classList.add("slideMe");
				//removes keyframe class after 1 second so animation happens again if button pressed again
				setTimeout(() => {
			      	requireMessage.classList.remove("slideMe");
			    }, 1000);

				//sets colors back to default after 1 second delay
				setTimeout(()=>{
				requireMessage.style.display = "none"
				forminput.style.borderColor = "lightgrey";
				textarea.style.borderColor = "lightgrey";
			}, 1000);
		} 
		else {
			// e.preventDefault();
			//displays  sucess message, adds keyframe animate class to slide up
			successMessage.style.display = "block";
			successMessage.classList.add("slideMe");

			//waits 2 seconds before removing the slide, to replay animation if needed
			setTimeout(() => {
			      	successMessage.classList.remove("slideMe");
			    }, 2000);

			//styles successs box 
			requireMessage.style.display = "none"
			forminput.style.borderColor = "limegreen";
			textarea.style.borderColor = "limegreen";

			//styles box back to normal after 1 second
			setTimeout( ()=>{
				successMessage.style.display = "none"
				forminput.style.borderColor = "lightgrey";
				textarea.style.borderColor = "lightgrey";
			}, 1000);

			//save input to local storage
			localStorage.setItem(forminput.value, textarea.value);

			forminput.value = "" ;
			textarea.value = " ";

		}		
})

//autocomplete
//autocomplete function 
//  const forminput = document.querySelector(".forminput")
//  let  autocompleteResults = document.querySelector(".autocomplete-results");
//  const nameList = ["Dawn Wood", "Dan Oliver" , "Dale Byrd" , "Victoria Chambers", "Mike Gordon",
//  				"Jon Fishman", "Page McConell", "Trey Anastasio",  "Chris Kuroda", "Junior Munioz"];
//  let matches = [];
//  let matchList = [];


// function toggleResults(action){
// 	if (action == "show"){
// 		nameList.classList.add("visable");
// 	}
// 	else {
// 		nameList.classList.remove("visable");
// 	}
// }

// function getMatches(inputText){
// 	for (let i = 0 ; i < nameList.length ; i++){
// 		if (nameList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1){
// 			matchList.push(nameList[i])
// 		}
// 	}
// 	return matchList
// }

// function displayMatches(matchList){
// 	let j = 0 
// 	while (j < matchList.length) {
// 		autocompleteResults.innerHTML += "<li class=visable > " + matchList[j] + "</li>"
// 	}
// }

//  forminput.addEventListener("keyup", (e) => {
//  	// autocompleteResults.innerHTML = "";
//  	toggleResults("hide");
//  	if (forminput.value.length > 0 ){  //or can use "this" object instead of forminput
//  		matches = getMatches(forminput.value);
//  		if (matches.length > 0){
//  			displayMatches(matches)
//  		}


//  	}
//  })


