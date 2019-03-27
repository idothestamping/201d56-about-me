'use strict';

var myQuestions = [
  ['Am I handsome? Yes/No'],
  ['Am I awesome? Yes/No'],
  ['Did I make this site in 1hr? Yes/No'],
  ['Do I like Trump? Yes/No'],
  ['Was I already an Amazonian? Yes/No']
];
var myAnswers = [
  ['YES'],
  ['YES'],
  ['NO'],
  ['NO'],
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

// for(var i=0; i<myQuestions.length; i += 1 ) { // loop through questions
//   var userAnswer = prompt(myQuestions[i][0]); // get user input
//   for(var j=0; j<myAnswers[i].length; j += 1 ) { // inner loop to check user input vs my answers
//     if(userAnswer.toUpperCase() === myAnswers[j][0]){
//       alert('You\'re Right!');
//     } else {
//       alert('Nope, that\'s wrong...');
//     }
//   }
// }

for(var i=0; i<myQuestions.length; i += 1 ) { // loop through questions
  var userAnswer = prompt(myQuestions[i][0]); // get user input
    if(userAnswer.toUpperCase() === myAnswers[i][0]){
      alert('You\'re Right!');
    } else {
      alert('Nope, that\'s wrong...');
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
  console.log('That\'s not my name, sorry.');
  alert('That\'s not my name, sorry.');
  document.getElementById('picbox').classList.add('fail');
  document.getElementById('result').innerHTML = 'Sorry, that\'s not me, Try again...';
}



