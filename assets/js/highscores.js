// constant variables //
var highScoreHeadline = document.getElementById("headline-HS");
var listOfScores = document.getElementById("list-of-scores");
var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");

btnOne.style.visibility = "visible";
btnTwo.style.visibility = "visible";

highScoreHeadline.innerHTML = "High Scores!";

btn1.innerHTML = "Go Back";
btn2.innerHTML = "Clear High Scores";
// High Scores Page //

// Show Users scores //
displayScores();

function displayScores() {
  // event.preventDefault();
  var lastUser = JSON.parse(localStorage.getItem("userInitials"));
  console.log(lastUser);
  var lastScore = localStorage.getItem("finalScore");
  listOfScores.textContent = "1. " + lastUser + "  " + lastScore;
}


