// constant variables //
var timer = document.getElementById("timer");
var headline = document.getElementById("headline");
var question = document.getElementById("question");
var pText = document.getElementById("pText");
var btn = document.getElementById("btn");
var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");
var btnThree = document.getElementById("btn3");
var btnFour = document.getElementById("btn4");
var choices = document.getElementById("choices");
var answerDiv = document.getElementById("answer");
var answerText = document.getElementById("answer-text");
var container = document.getElementById("startContainer");
var form = document.getElementById("form");
var submitBtn = document.getElementById("submitBtn");
var initials = document.getElementById("initials");

var userArray = [];

// Function to run start quiz //
startQuiz();

//Timer Variables //

var interval;
var secondsLeft = 10;
var finalScore;

// START TIMER //

function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(interval);
      // Redirect to scores page if timer runs out //
      finalScore = 0;
      yourFinalScore();
    }
  }, 1000);
}

// Wrong Answer notification and time deduction //

function wrongAnswer() {
  // wrong answer displays wrong answer div //
  answerDiv.style.visibility = "visible";
  answerText.innerHTML = "Wrong!";

  setTimeout(function () {
    answerDiv.style.visibility = "hidden";
  }, 3000);

  //  subtracts 10 seconds //
  secondsLeft = secondsLeft - 10;
  timer.innerHTML = secondsLeft;
}

// Correct Answer notification//

function correctAnswer() {
  // wrong answer displays wrong answer div //
  answerDiv.style.visibility = "visible";
  answerText.innerHTML = "Correct!";

  setTimeout(function () {
    answerDiv.style.visibility = "hidden";
  }, 3000);
}

// START QUIZ //

function startQuiz() {
  //Hide Question Container//
  btnOne.style.visibility = "hidden";
  btnTwo.style.visibility = "hidden";
  btnThree.style.visibility = "hidden";
  btnFour.style.visibility = "hidden";
  answerDiv.style.visibility = "hidden";
  form.style.visibility = "hidden";
  container.removeChild(form);
  // Headline, paragraph and start quiz attributes //
  headline.innerHTML = "Coding Quiz Challenge";
  pText.innerHTML =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  btn.innerHTML = "Start Quiz";
  btn.onclick = questionOne;
}

function questionOne() {
  startTimer();
  //Hide and show Text/Buttons
  headline.innerHTML = "";
  pText.innerHTML = "";
  btn.style.visibility = "hidden";
  btnOne.style.visibility = "visible";
  btnTwo.style.visibility = "visible";
  btnThree.style.visibility = "visible";
  btnFour.style.visibility = "visible";
  container.removeChild(btn);

  //Question//
  question.innerHTML = "Commonly used data types DO NOT include:";

  //Choices//
  btnOne.innerHTML = "1. strings";
  btnTwo.innerHTML = "2. booleans";
  btnThree.innerHTML = "3. alerts";
  btnFour.innerHTML = "4. numbers";

  // on clicks for answer buttons //

  btnOne.onclick = answerWrong;
  btnTwo.onclick = answerWrong;
  btnThree.onclick = answerRight;
  btnFour.onclick = answerWrong;
  // right answer moves on to next questions //

  function answerRight() {
    correctAnswer();
    questionTwo();
  }

  function answerWrong() {
    wrongAnswer();
    questionTwo();
  }
}

function questionTwo() {
  //Question//
  question.innerHTML =
    "The condition in an if/else statement is enclosed within ________.";

  //Choices//
  btnOne.innerHTML = "1. quotes";
  btnTwo.innerHTML = "2. curly brackets";
  btnThree.innerHTML = "3. parentheses";
  btnFour.innerHTML = "4. square brackets";

  // on clicks for answer buttons //

  btnOne.onclick = answerWrong;
  btnTwo.onclick = answerWrong;
  btnThree.onclick = answerRight;
  btnFour.onclick = answerWrong;

  function answerRight() {
    correctAnswer();
    questionThree();
  }

  function answerWrong() {
    wrongAnswer();
    questionThree();
  }
}

function questionThree() {
  //Question//
  question.innerHTML = "Arrays in JavaScript can be used to store ________.";

  //Choices//
  btnOne.innerHTML = "1. numbers and strings";
  btnTwo.innerHTML = "2. other arrays";
  btnThree.innerHTML = "3. booleans";
  btnFour.innerHTML = "4. all of the above";

  // on clicks for answer buttons //

  btnOne.onclick = answerWrong;
  btnTwo.onclick = answerWrong;
  btnThree.onclick = answerWrong;
  btnFour.onclick = answerRight;

  function answerRight() {
    correctAnswer();
    questionFour();
  }

  function answerWrong() {
    wrongAnswer();
    questionFour();
  }
}

function questionFour() {
  //Question//
  question.innerHTML =
    "String values must be enclosed within ________ when being assigned to variables.";

  //Choices//
  btnOne.innerHTML = "1. commas";
  btnTwo.innerHTML = "2. curly brackets";
  btnThree.innerHTML = "3. quotes";
  btnFour.innerHTML = "4. parentheses";

  // on clicks for answer buttons //

  btnOne.onclick = answerWrong;
  btnTwo.onclick = answerWrong;
  btnThree.onclick = answerRight;
  btnFour.onclick = answerWrong;

  function answerRight() {
    correctAnswer();
    questionFive();
  }

  function answerWrong() {
    wrongAnswer();
    questionFive();
  }
}

function questionFive() {
  //Question//
  question.innerHTML =
    "A very useful tool used during development and debugging for printing content to the debugger is:";

  //Choices//
  btnOne.innerHTML = "1. Javascript";
  btnTwo.innerHTML = "2. terminal/bash";
  btnThree.innerHTML = "3. for loops";
  btnFour.innerHTML = "4. console.log";

  // on clicks for answer buttons //

  btnOne.onclick = answerFinalWrong;
  btnTwo.onclick = answerFinalWrong;
  btnThree.onclick = answerFinalWrong;
  btnFour.onclick = answerFinalRight;
}

function answerFinalRight() {
  correctAnswer();
  // LOG TIME and go to high score page//
  finalScore = secondsLeft;
  console.log(finalScore);
  clearInterval(interval);

  yourFinalScore();
}

function answerFinalWrong() {
  wrongAnswer();
  // LOG TIME - 10 seconds and go to high score page//
  finalScore = secondsLeft - 10;
  console.log(finalScore);
  clearInterval(interval);

  yourFinalScore();
}

// High Scores Page //

function yourFinalScore() {
  btnOne.style.visibility = "hidden";
  btnTwo.style.visibility = "hidden";
  btnThree.style.visibility = "hidden";
  btnFour.style.visibility = "hidden";
  //Hide timer//
  timer.style.visibility = "hidden";

  //Headline and Final Score display//

  question.innerHTML = "All Done!";
  pText.innerHTML = "Your final score is " + finalScore + ".";
  pText.style.textAlign = "left";

  // FORM display and hiding other elements //
  form.style.visibility = "visible";
  container.appendChild(form);
  container.removeChild(choices);

  submitBtn.onclick = submitScore;
}
//SUBMIT initials and score to local storage and move to high scores page! //

function submitScore(event) {
  event.preventDefault();
  //Submit button //
  var userInitials = initials.value;
  var storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (storedUserInfo !== null) {
    userArray = storedUserInfo;
  }
  userArray.push({ name: userInitials, score: finalScore });
  localStorage.setItem("userInfo", JSON.stringify(userArray));
  window.location.href = "highScores.html";
}
