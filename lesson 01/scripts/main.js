// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #5 (change)
today1.innerHTML = new Date().toLocaleDateString("en-US", options);
// Question #6 (change)
today2.innerHTML = `<strong>Volume</strong>:  ${volume} liters`;
// Question #7
let quantity = document.querySelector('#q').value;
// Question #8
document.querySelector('aside').innerHTML = 'Welcome to <em>our lovely</em> neighborhood!';
// Question #9
document.querySelector('#temp').value = getCelsius(33);
// Question #10

// Question #11
