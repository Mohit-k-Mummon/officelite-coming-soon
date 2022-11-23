// CountDown Timer Logic

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

// Form Logic

// Form Code Variables
const dropDownContainer = document.querySelector('.drop-down-container');
const dropDownSelector = document.getElementById('drop-down');
const chevron = document.getElementById('chevron');

// STATES
let dropDownActive = false;
let currentSelection = 'basic';

// PLANS
// Free
const free = document.getElementById('free-pack');
const freeText = document.getElementById('basic-select');
const freeTick = document.getElementById('free-tick');

// Pro
const pro = document.getElementById('pro-pack');
const proText = document.getElementById('pro-select');
const proTick = document.getElementById('pro-tick');

// Ultimate
const ultimate = document.getElementById('ultimate-pack');
const ultimateText = document.getElementById('ultimate-select');
const ultimateTick = document.getElementById('ultimate-tick');

// Main Select
const mainSelect = document.getElementById('main-select');

dropDownSelector.addEventListener('click', () => {
	if (!dropDownActive) {
		dropDownContainer.style.display = 'block';
		chevron.style.transform = 'rotate(-180deg)';
		dropDownActive = true;
	} else {
		dropDownContainer.style.display = 'none';
		chevron.style.transform = 'rotate(0)';
		dropDownActive = false;
	}
});

freeText.addEventListener('click', () => {
	currentSelection = 'basic';
	freeTick.style.visibility = 'visible';
	proTick.style.visibility = 'hidden';
	ultimateTick.style.visibility = 'hidden';
	mainSelect.innerHTML = freeText.innerHTML;

	// Close container after selection
	dropDownContainer.style.display = 'none';
	chevron.style.transform = 'rotate(0)';
	dropDownActive = false;
});

proText.addEventListener('click', () => {
	currentSelection = 'pro';
	proTick.style.visibility = 'visible';
	freeTick.style.visibility = 'hidden';
	ultimateTick.style.visibility = 'hidden';
	mainSelect.innerHTML = proText.innerHTML;

	// Close container after selection
	dropDownContainer.style.display = 'none';
	chevron.style.transform = 'rotate(0)';
	dropDownActive = false;
});

ultimateText.addEventListener('click', () => {
	currentSelection = 'ultimate';
	ultimateTick.style.visibility = 'visible';
	freeTick.style.visibility = 'hidden';
	proTick.style.visibility = 'hidden';
	mainSelect.innerHTML = ultimateText.innerHTML;

	// Close container after selection
	dropDownContainer.style.display = 'none';
	chevron.style.transform = 'rotate(0)';
	dropDownActive = false;
});

// Form Validation

// Button
const submit = document.getElementById('submit');

// Form
const form = document.querySelector('.form');

form.addEventListener('submit', validate);
submit.addEventListener('click', validate);

function validate(e) {
	e.preventDefault();

	const inputs = document.getElementsByTagName('input');
	let pass = 4;

	if (inputs[0].value === '' || !nameValidate(inputs[0].value)) {
		inputs[0].style.color = 'var(--red)';
		inputs[0].parentNode.style.borderBottom = '1px solid var(--red)';
		inputs[0].nextElementSibling.style.visibility = 'visible';
		pass--;
	} else {
		inputs[0].parentNode.style.borderBottom = '1px solid #babecb';
		inputs[0].style.color = '#111';
		inputs[0].nextElementSibling.style.visibility = 'hidden';
	}

	if (inputs[1].value === '' || !isEmail(inputs[1].value)) {
		inputs[1].style.color = 'var(--red)';
		inputs[1].parentNode.style.borderBottom = '1px solid var(--red)';
		inputs[1].nextElementSibling.style.visibility = 'visible';

		pass--;
	} else {
		inputs[1].parentNode.style.borderBottom = '1px solid #babecb';
		inputs[1].style.color = '#111';
		inputs[1].nextElementSibling.style.visibility = 'hidden';
	}

	if (inputs[2].value === '' || !isPhone(inputs[2].value)) {
		inputs[2].style.color = 'var(--red)';
		inputs[2].parentNode.style.borderBottom = '1px solid var(--red)';
		inputs[2].nextElementSibling.style.visibility = 'visible';
		pass--;
	} else {
		inputs[2].parentNode.style.borderBottom = '1px solid #babecb';
		inputs[2].style.color = '#111';
		inputs[2].nextElementSibling.style.visibility = 'hidden';
	}

	if (inputs[3].value === '') {
		inputs[3].style.color = 'var(--red)';
		inputs[3].parentNode.style.borderBottom = '1px solid var(--red)';
		inputs[3].nextElementSibling.style.visibility = 'visible';
		pass--;
	} else {
		inputs[3].parentNode.style.borderBottom = '1px solid #babecb';
		inputs[3].nextElementSibling.style.visibility = 'hidden';
		inputs[3].style.color = '#111';
	}

	if (pass === 4) {
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
	}

	for (let i = 0; i < inputs.length; i++) {
		console.log(inputs[i].value);
	}
}

// Regex function
function nameValidate(input) {
	return /^[A-Z][a-z]+\s[A-Z][a-z]+$/gi.test(input);
}

function isEmail(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

function isPhone(input) {
	return /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(
		input
	);
}
