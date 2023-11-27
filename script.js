"use strict";

//document.querySelector('.number').textContent = 18;

document.querySelector(".guess").value = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = score;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  console.log(guessNumber);

  if (!guessNumber) {
    DisplayMessage("No Number!");
  }
  //win
  else if (secretNumber === guessNumber) {
    DisplayMessage("🏆Correct Guess");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if(score > highScore){
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  else if(secretNumber !== guessNumber ){
    if (score > 1) {
      DisplayMessage(secretNumber > guessNumber ? "Low" : "High");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      DisplayMessage("You lose the game!");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
  /*
  //low
  else if (secretNumber > guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
  //high
  else if (secretNumber < guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the game!";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
  */
});



//1st way
document.querySelector(".again").addEventListener("click", function(){
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  Document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";

});


/*
//2nd way
const btn = document.querySelector('.btn');
console.log(btn);

btn.addEventListener("click", function () {
location.reload();
});
 */


function DisplayMessage(message){
  document.querySelector(".message").textContent = message;

}







