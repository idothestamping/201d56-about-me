'use strict';

var myQuestions = [
  ['Am I handsome? yes or no'],
  ['Am I awesome? yes or no'],
  ['Did I make this site in 1hr? yes or no'],
  ['Do I like Trump? yes or no'],
  ['Was I already an Amazonian? yes or no'],
];
var myAnswers = [
  ['YES'],
  ['YES'],
  ['NO'],
  ['NO'],
  ['YES'],
  [5],
  ['strawberry', 'chocolate', 'green tea', 'rocky road']
];
var totalCount = 0
// personalize user experience with their name
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

// Question 6: Guessing the number with 3 tries
var numberOfChances = 0;
var numberQuestion = prompt('How many dirty martini\'s can I drink in one setting? (enter a number)');
while (numberQuestion != myAnswers[5] && numberOfChances <= 2 ) {
  if (myAnswers[5] < numberQuestion) {
    numberQuestion = prompt('You\'ve guessed too high! Keep guessing!');
  } else {
    numberQuestion = prompt('You\'ve guessed too low! Keep guessing!');
  }
  numberOfChances++;
  console.log(numberOfChances);
}

// Needs more work... keep to ask for feedback for Question 6.
// if (numberQuestion === MyAnswers[5]){
//   alert('You\'re Right!');
//   totalCount++; // Count of questions with correct answer.
// } else if(numberOfChances >= 2){
//   alert('Let\'s move on...');
// }

// Question 7: Multiple Possible Answers
var numberOfChances2 = 0;
var iceCreamQuestion = prompt('Name any 1 of 4 ice cream flavors I like?');
if(myAnswers[6].indexOf(iceCreamQuestion) == -1 && numberOfChances2 <= 2) {
  prompt('Try another flavor');
  numberOfChances++;
} else {
  totalCount++;
  alert('Nice, you got it right!');
}

// guess the final answer
var finalAnswer = prompt('Final Question: So what\'s my name?');
if(finalAnswer === 'doug'){
  console.log('Congrats, you guessed who I am!!');
  alert('Congrats, you guessed who I am!!');
  document.getElementById('picbox').classList.add('win'); // Add win image to body
  document.getElementById('result').innerHTML = 'Great job mate!!! You\'ve got ' + totalCount + ' answer(s) correct!'; // Add win statement to body
} else {
  console.log('That\'s not my name, sorry.');
  alert('That\'s not my name, sorry.');
  document.getElementById('picbox').classList.add('fail'); // Add win image to body
  document.getElementById('result').innerHTML = 'Sorry, that\'s not me, Try again... You\'ve got ' + totalCount + ' answer(s) correct!'; // Add win statement to body
}



