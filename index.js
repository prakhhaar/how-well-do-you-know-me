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
  question : "Who's my favourite sportsperson ? ",
  answer : "Cristiano Ronaldo"
}

var questionFour = {
  question: "Which game I have played competitively? ",
  answer: "Chess"
}

var questionFive = {
  question: "What collection was my first NFT? ",
  answer: "SGF United"
}

var questionsList = [questionOne, questionTwo, questionThree, questionFour, questionFive];
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