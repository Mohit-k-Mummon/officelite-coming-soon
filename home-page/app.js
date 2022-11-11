const monthList = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

// Release Date Element
const releaseDate = document.getElementById('date');
let outputDate = '';

// Current Date in Milli-seconds
const today = new Date().getTime();

// 30 days from current Date in Milli-seconds
const thirtyDaysLater = today + 2592000000;

// 30 days from current date in Date Format
const thirtyDaysFuture = new Date(thirtyDaysLater);

// 30 days from current date date
const date = thirtyDaysFuture.getDate();

// 30 days from current date Month
const month = monthList[thirtyDaysFuture.getMonth()];

// 30 Days from current date Year
const year = thirtyDaysFuture.getFullYear().toString();

// Concatenating string
outputDate += date;
outputDate += ' ' + month;
outputDate += ' ' + year;

// Setting Date innerText
releaseDate.innerText = outputDate;

let futureDate = today + 2592000000;

function countDown() {
	// Time equations
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Current Date in Milli-seconds
	const today = new Date().getTime();

	// 30 days from current Date in Milli-seconds
	const thirtyDaysLater = futureDate;

	// Countdown Time
	const countdownTime = thirtyDaysLater - today;

	// 30 days from current date in Date Format
	const released = new Date(thirtyDaysLater);

	let textDay = Math.floor(countdownTime / day);
	let textHour = Math.floor((countdownTime % day) / hour);
	let textMinute = Math.floor((countdownTime % hour) / minute);
	let textSeconds = Math.floor((countdownTime % minute) / second);

	document.getElementById('days').innerText = textDay;
	document.getElementById('hours').innerText = textHour;
	document.getElementById('mins').innerText = textMinute;
	document.getElementById('secs').innerText = textSeconds;

	futureDate - 1;
}

countDown();
setInterval(countDown, 1000);
