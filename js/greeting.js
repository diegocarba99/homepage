// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Diego';

// Here you can change your greetings
var gree1 = 'Jun lotara! ';
var gree2 = 'Egunon! ';
var gree3 = 'Arratsaldeon ';
var gree4 = 'Gabon ';

var morning = 6;
var midday = 14;
var night = 21;


// Define the hours of the greetings
if (hour >= 23 && hour < morning) {
    document.getElementById('greetings').innerText = gree1 + name;

} else if (hour >= morning && hour < midday) {
    document.getElementById('greetings').innerText = gree2 + name;

} else if (hour >= midday && hour < night) {
    document.getElementById('greetings').innerText = gree3 + name;

} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
