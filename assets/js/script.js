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
var wrongAnswerDiv = document.getElementById("wrongAnswer");

//Timer Variables //

var interval;
var questionIndex = -1;
var secondsLeft = 75;

// START QUIZ //
startQuiz();

// START TIMER //

function startTimer() {

  interval = setInterval(function(){
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0){
      clearInterval(interval);
    } 
  }, 1000);
};

function startQuiz() {
  //Hide Question Container//
  btnOne.style.visibility = "hidden";
  btnTwo.style.visibility = "hidden";
  btnThree.style.visibility = "hidden";
  btnFour.style.visibility = "hidden";
  wrongAnswerDiv.style.visibility = "hidden";
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
    questionTwo();
  };
  
  function answerWrong() {
    wrongAnswer();
    questionTwo();
};
 // log users input to local storage //
   
};

function wrongAnswer() {
     // wrong answer displays wrong answer div //
     wrongAnswerDiv.style.visibility = "visible";
     setTimeout(function(){
      wrongAnswerDiv.style.visibility = "hidden";
   }, 2000);

  //  subtracts 10 seconds //
    secondsLeft = secondsLeft - 10;
    timer.innerHTML = secondsLeft;

};

function questionTwo() {

  //Question//
  question.innerHTML = "The condition in an if/else statement is enclosed within ________.";

  //Choices//
  btnOne.innerHTML = "1. quotes";
  btnTwo.innerHTML = "2. curly brackets";
  btnThree.innerHTML = "3. parentheses";
  btnFour.innerHTML = "4. square brackets";

  // on clicks for answer buttons //

  btnOne.onclick = questionTwo;
  btnTwo.onclick = questionTwo;
  btnThree.onclick = questionTwo;
  btnFour.onclick = questionTwo;

   // right answer moves on to next questions //
  
 // log users input to local storage //

    
};


//Logging Scores