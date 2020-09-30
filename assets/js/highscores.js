// constant variables //
var highScoreHeadline = document.getElementById("headline-HS");
var highScores = document.getElementById("high-scores");
var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");

var userInfo;

btnOne.style.visibility = "visible";
btnTwo.style.visibility = "visible";

highScoreHeadline.innerHTML = "High Scores!";

btn1.innerHTML = "Go Back";
btn2.innerHTML = "Clear High Scores";

var storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

window.onload = function renderScores() {
  for (var i = 0; i < storedUserInfo.length; i++) {
    var listOfScores = document.createElement("li");
    listOfScores.setAttribute(
      "class",
      "list-group-item list-group-item-primary"
    );
    listOfScores.style.backgroundColor = "#bd9cf1";
    listOfScores.textContent =
      i +
      1 +
      "." +
      " " +
      storedUserInfo[i].name +
      " @ " +
      storedUserInfo[i].score +
      "s!";

    highScores.appendChild(listOfScores);
    console.log(storedUserInfo[i].name);
    console.log(storedUserInfo[i].score);
  }
};

btnTwo.addEventListener("click", function(event) {
  localStorage.clear(storedUserInfo);
  location.reload();
});

// When a element inside of the todoList is clicked...
btn1.addEventListener("click", function () {
  window.location.href = "index.html";
});
