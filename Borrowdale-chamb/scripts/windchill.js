var temp = 52;
var wSpeed = 9;

var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16));

var windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;