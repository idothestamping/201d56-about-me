'use strict';

var myQuestions = [
  ['Am I handsome? Yes/No'],
  ['Am I awesome? Yes/No'],
  ['Do I sit in back 2 rows? Yes/No'],
  ['Do I like you? Yes/No'],
  ['Was I already an Amazonian? Yes/No']
];
var myAnswers = [
  ['YES'],
  ['YES'],
  ['YES'],
  ['YES'],
  ['YES']
];

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
  for(var j=0; j<myQuestions[i].length; j += 1 ) { // inner loop to check user input vs my answers
    if(userAnswer.toUpperCase() === myAnswers[j][0]){
      alert('You\'re Right!');
    } else {
      alert('Nope, that\'s wrong...');
    }
  }
}

// guess the final answer
var finalAnswer = prompt('So what\'s my name?');
if(finalAnswer === 'doug'){
  console.log('Congrats, you guessed who I am!!');
  alert('Congrats, you guessed who I am!!');
  document.getElementById('picbox').classList.add('win');
  document.getElementById('result').innerHTML = 'Great job mate!!!';
} else {
  console.log(userName + ', that\'s not my name, sorry.');
  alert('Hi, ' + userName + ', that\'s not my name, sorry.');
  document.getElementById('picbox').classList.add('fail');
  document.getElementById('result').innerHTML = 'Sorry, that\'s not me, Try again...';
}



