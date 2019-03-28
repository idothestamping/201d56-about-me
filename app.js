'use strict';

var myQuestions = [
  'Am I handsome? yes or no',
  'Am I awesome? yes or no',
  'Did I make this site in 1hr? yes or no',
  'Do I like Trump? yes or no',
  'Was I already an Amazonian? yes or no',
];
var myAnswers = [
  'YES',//0
  'YES',//1
  'NO',//2
  'NO',//3
  'YES',//4
  5,//5
  ['strawberry', 'chocolate', 'green tea', 'rocky road']//6
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

for(var i=0; i < myQuestions.length; i += 1 ) { // loop through questions
  var userAnswer = prompt(myQuestions[i]).toUpperCase(); // get user input
  checkRightAnswer(userAnswer,myAnswers[i]);
}

// Question 6: Guessing the number with 3 tries
var numberOfChances = 0;
var numberQuestion = parseInt(prompt('How many dirty martini\'s can I drink in one setting? (enter a number)'));
while (numberOfChances <= 2 ) { // too low to high number 
  if(numberQuestion == myAnswers[5]){
    alert('You\'re Right!');
    totalCount++;
    break;
  }else{
    numHighOrLow(myAnswers[5], numberQuestion);
    console.log(numberOfChances);
  }
  numberOfChances++;
}

// Question 7: Multiple Possible Answers
var numberOfChances2 = 0;
var iceCreamArr = myAnswers[6];
var iceCream = 0;
var iceCreamGuessed = false;
while (numberOfChances2 <= 2 ) { 
  var iceCreamQuestion = prompt('Name any 1 of 4 ice cream flavors I like?');
  while(iceCream != iceCreamArr.length){
    if(iceCreamQuestion === iceCreamArr[iceCream]){
      alert('You\'re Right!');
      totalCount++;
      iceCreamGuessed = true;
      break;
    }else{
      console.log(numberOfChances2);
      alert('You\'re Wrong!');
      break;
    }
    
    iceCream++;
  }

  if(iceCreamGuessed){
    break;
  }

  numberOfChances2++;
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


function numHighOrLow(correct, answer){
  if (correct < answer) {
    numberQuestion = prompt('You\'ve guessed too high! Keep guessing!');
  } else {
    numberQuestion = prompt('You\'ve guessed too low! Keep guessing!');
  }
}

function checkRightAnswer(x,y){
  if(x === y){
    alert('You\'re Right!');
    totalCount++;
  } else {
    alert('Nope, that\'s wrong...');
  }

}