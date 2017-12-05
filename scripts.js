console.log("Start scripts.js");
alert("Hello From Eric");
document.write("<h1>Welcome from the Scripts.js file</h1>");
alert("Thanks for visiting");


var score = 0;
var message = "This is a variable message!";
alert(message);
message = "I \"overwrote\" the message variable";
alert(message);

var visitorName = prompt("what's your name?");
console.log(visitorName);
var message = "Hello " + visitorName.toUpperCase();
message += ", glad to meet you!";
document.write(message);
document.write(visitorName);
console.log("Name Length is " + visitorName.length);
score = parseInt(score);
score += 100;

var temp = 27.5;
alert(Math.round(temp));
alert(Math.floor(temp));

var maxRandValue = parseInt(prompt('How many sided Die do you want to roll?'));
console.log(maxRandValue);
var sixSidedDie = (Math.floor(Math.random()*maxRandValue) + 1);
alert('You rolled a '+ sixSidedDie);


console.log("Finished scripts.js");