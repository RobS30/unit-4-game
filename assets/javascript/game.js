
$(document).ready(function() {

// variable declarations
var wins = 0;
var losses = 0;
var playersCurrentScore = 0;
var computersRandomNumber = 0;
var crystalValueBlue;
var crystalValueGreen;
var crystalValueRed;
var crystalValueYellow;

//functions
var updatePlayerScore = function () {
  $('#playersScore').html("Players Current Score: "+ playersCurrentScore);
}

var updateComputerNumber = function () {
$('#compsNumberDiv').html("Computer's Number: " + computersRandomNumber);
}

var updateWins = function () {
  $('#winsDiv').html("Wins: " + wins);
}

var updateLosses = function () {
  $('#lossesDiv').html("Losses: " + losses);
}

var resetPlayerScore = function(){
  playersCurrentScore = 0;
}

var newGame = function () {
  computersRandomNumber = Math.floor((Math.random() * 120) + 1);
  console.log("Computer's Number: " + computersRandomNumber);
  updateComputerNumber();
  crystalValueBlue = Math.floor((Math.random() * 12) + 1);
  console.log("Blue: " + crystalValueBlue);
  crystalValueGreen = Math.floor((Math.random() * 12) + 1);
  console.log("Green: " + crystalValueGreen);
  crystalValueRed = Math.floor((Math.random() * 12) + 1);
  console.log("Red: " + crystalValueRed);
  crystalValueYellow = Math.floor((Math.random() * 12) + 1);
  console.log("Yellow: " + crystalValueYellow);
}

var currentGameStatus = function () {
  if (playersCurrentScore === computersRandomNumber) {
    alert("You win!");
    wins ++;
    console.log("Wins: " + wins);
    updateWins();
    resetPlayerScore();
    updatePlayerScore();
    newGame();
  } else if (playersCurrentScore > computersRandomNumber) {
    alert("You lose!");
    losses ++;
    console.log ("Losses: " + losses);
    updateLosses();
    resetPlayerScore();
    updatePlayerScore();
    newGame();
  } else {
    console.log("Keep going!")
  }

}

// starts new game on page load
newGame();

// Functions for clicking on the crystals
$('#blueCrystal').click(function () {
  console.log("You clicked Blue! +" + crystalValueBlue);
  playersCurrentScore = playersCurrentScore + crystalValueBlue;
  console.log("Current Score: " + playersCurrentScore);
  updatePlayerScore ();
  currentGameStatus ();
})

$('#greenCrystal').click(function () {
  console.log("You clicked Green! +" + crystalValueGreen);
  playersCurrentScore = playersCurrentScore + crystalValueGreen;
  console.log("Current Score: " + playersCurrentScore);
  updatePlayerScore ();
  currentGameStatus ();
})

$('#redCrystal').click(function () {
  console.log("You clicked Red! +" + crystalValueRed);
  playersCurrentScore = playersCurrentScore + crystalValueRed;
  console.log("Current Score: " + playersCurrentScore);
  updatePlayerScore ();
  currentGameStatus ();
})

$('#yellowCrystal').click(function () {
  console.log("You clicked Yellow! +" + crystalValueYellow);
  playersCurrentScore = playersCurrentScore + crystalValueYellow;
  console.log("Current Score: " + playersCurrentScore);
  updatePlayerScore ();
  currentGameStatus ();
})


});