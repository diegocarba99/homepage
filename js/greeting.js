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


// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 20) {
    document.getElementById('greetings').innerText = gree3 + name;
} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
