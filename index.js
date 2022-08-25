// Exercise 13&14&15
var readlineSync = require("readline-sync");

var score = 0;

var questionOne = {
  question : "Where do I live? ",
  answer : "Indore"
}

var questionTwo = {
  question : "What's my favourite book? ",
  answer : "The Almanack of Naval Ravikant"
}

var questionThree = {
  question : "Who's my favourite sportsperson ?",
  answer : "Cristiano Ronaldo"
}

var questionsList = [questionOne, questionTwo, questionThree];
askQuestions(questionsList);

function askQuestions(questionList){
  for(var i = 0 ; i < questionsList.length; i++){
    var userAnswer = readlineSync.question(questionList[i].question);
    if(userAnswer == questionList[i].answer){
      score++;
    }
  }
}

console.log("Your score is: " + score + "/" + questionsList.length);