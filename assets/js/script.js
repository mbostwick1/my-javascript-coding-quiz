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
var answerDiv = document.getElementById("answer");
var answerText = document.getElementById("answer-text");



// Function to run start quiz //
startQuiz();

//Timer Variables //

var interval;
var questionIndex = -1;
var secondsLeft = 75;

// START TIMER //

function startTimer() {
  interval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// Wrong Answer notification and time deduction //

function wrongAnswer() {
  // wrong answer displays wrong answer div //
  answerDiv.style.visibility = "visible";
  answerText.innerHTML = "Wrong!"
  
  setTimeout(function () {
    answerDiv.style.visibility = "hidden";
  }, 2000);

  //  subtracts 10 seconds //
  secondsLeft = secondsLeft - 10;
  timer.innerHTML = secondsLeft;
}

// Correct Answer notification//

function correctAnswer() {
  // wrong answer displays wrong answer div //
  answerDiv.style.visibility = "visible";
  answerText.innerHTML = "Correct!"

  setTimeout(function () {
    answerDiv.style.visibility = "hidden";
  }, 2000);

}

// START QUIZ //

function startQuiz() {
  //Hide Question Container//
  btnOne.style.visibility = "hidden";
  btnTwo.style.visibility = "hidden";
  btnThree.style.visibility = "hidden";
  btnFour.style.visibility = "hidden";
  answerDiv.style.visibility = "hidden";
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
  question.innerHTML =
    "Arrays in JavaScript can be used to store ________.";

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

  btnOne.onclick = answerWrong;
  btnTwo.onclick = answerWrong;
  btnThree.onclick = answerWrong;
  btnFour.onclick = answerRight;

  function answerRight() {
    // LOG TIME and go to high score page//
  }

  function answerWrong() {
    // LOG TIME - 10 seconds and go to high score page//
  }
}






//Logging Scores

