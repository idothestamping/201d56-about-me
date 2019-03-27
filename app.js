'use strict';

var myQuestions = [
  ['Am I handsome? yes or no'],
  ['Am I awesome? yes or no'],
  ['Did I make this site in 1hr? yes or no'],
  ['Do I like Trump? yes or no'],
  ['Was I already an Amazonian? yes or no']
];
var myAnswers = [
  ['YES'],
  ['YES'],
  ['NO'],
  ['NO'],
  ['YES'],
  [5],
];
var totalCount = 0
// // personalize user experience with their name
var userName = prompt('What is your name?');
if(userName === 'doug'){
  console.log('Hey, we\'ve got the same name!');
  alert('Hey, we\'ve got the same name!');
} else {
  console.log('Hi, ' + userName + '.  Welcome to the site!');
  alert('Hi, ' + userName + '.  Welcome to the site!');
}

for(var i=0; i<myQuestions.length; i += 1 ) { // loop through questions
  var userAnswer = prompt(myQuestions[i][0]); // get user input
  if(userAnswer.toUpperCase() === myAnswers[i][0]){
    alert('You\'re Right!');
    totalCount++;
  } else {
    alert('Nope, that\'s wrong...');
  }
}

// Question Six: Guessing the number with 3 tries
var numberOfChances = 0;

var numberQuestion = prompt('How many dirty martini\'s can I drink in one setting? (enter a number)');
while (numberQuestion != myAnswers[5] && numberOfChances <= 2 ) {
  if (myAnswers[5] < numberQuestion) {
    numberQuestion = prompt("You've guessed too high! Keep guessing!");
  } else {
    numberQuestion = prompt("You've guessed too low! Keep guessing!");
  }
  numberOfChances++;
  console.log(numberOfChances);
  if (myAnswers[5] === numberQuestion){
    alert('You\'re Right!');
  } else if(numberOfChances >= 3){
    alert('Let\'s move on...');
  }
}

totalCount++;

// guess the final answer
var finalAnswer = prompt('So what\'s my name?');
if(finalAnswer === 'doug'){
  console.log('Congrats, you guessed who I am!!');
  alert('Congrats, you guessed who I am!!');
  document.getElementById('picbox').classList.add('win');
  document.getElementById('result').innerHTML = 'Great job mate!!! You\'ve got ' + totalCount + ' answer(s) correct!';
} else {
  console.log('That\'s not my name, sorry.');
  alert('That\'s not my name, sorry.');
  document.getElementById('picbox').classList.add('fail');
  document.getElementById('result').innerHTML = 'Sorry, that\'s not me, Try again... You\'ve only got' + totalCount + ' answer(s) correct!';
}



