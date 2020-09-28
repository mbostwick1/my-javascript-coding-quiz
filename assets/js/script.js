// constant variables //

var headline = document.getElementById("headline");
var question = document.getElementById("question");
var pText = document.getElementById("pText");
var btn = document.getElementById("btn");
var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");
var btnThree = document.getElementById("btn3");
var btnFour = document.getElementById("btn4");
var wrongAnswer = document.getElementById("wrongAnswer");

// START QUIZ //

function startQuiz() {
  //Hide Question Container//
  btnOne.style.visibility = "hidden";
  btnTwo.style.visibility = "hidden";
  btnThree.style.visibility = "hidden";
  btnFour.style.visibility = "hidden";
  // Headline, paragraph and start quiz attributes //
  headline.innerHTML = "Coding Quiz Challenge";
  pText.innerHTML =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  btn.innerHTML = "Start Quiz";
  btn.onclick = questionOne;
    
}

startQuiz();

function questionOne() {

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

  
  //if else for right answer and wrong answers //

  // right answer moves on to next questions //
  // wrong answer displays wrong answer div and subtracts 10 seconds //

  // log users input to local storage //


  
  document.getElementById("btn").onclick = questionTwo;
    
}


//TIMER//


//Logging Scores