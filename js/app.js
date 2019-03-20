let chart1 = document.getElementById("chart1").getContext("2d");
let chart2 = document.getElementById("chart2").getContext("2d");
let chart3 = document.getElementById("chart3").getContext("2d");

//global chart options
Chart.defaults.global.defaultFontSize = 14;

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
})

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
})


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
			text: "Device type by percentage",
			fontSize: 16
		},
		cutoutPercentage: 45
	}
})
