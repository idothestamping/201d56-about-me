'use strict';

$(window).load(function() {
  // Animate loader off screen
  setInterval(function() {
    $(".se-pre-con").fadeOut("slow");;
  }, 1000);
});

$(document).ready(function(){
  // alert window auto disappear
  $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
      $("#success-alert").alert('close');
  });
  // materialize side menu on mobile
  $('.sidenav').sidenav();
  // materialize carousel
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});


var myQuestions = [
  'Am I handsome? Y/N',
  'Am I awesome? Y/N',
  'Did I make this site in 1hr? Y/N',
  'Do I like Trump? Y/N',
  'Was I already an Amazonian? Y/N',
  'martini',
  'icecream'
];
var myAnswers = [
  'Y',//0
  'Y',//1
  'N',//2
  'N',//3
  'Y',//4
  '5',//5
  ['strawberry', 'chocolate', 'green tea', 'rocky road']//6
];
var totalCount = 0;
var startGameLoop = false;
// var start = prompt('Do you want to play guessing game? Y/N');
// if(start.toUpperCase() === 'Y'){
//   startGame();
//   }else{
//   alert('Glad you\'re here!');
// }

// personalize user experience with their name
function startGame(){
  var userName = prompt('What is your name?');
  if(userName === 'doug'){
    console.log('Hey, we\'ve got the same name!');
    alert('Hey, we\'ve got the same name!');
    questions();
  } else {
    console.log('Hi, ' + userName + '.  Welcome to the site!');
    alert('Hi, ' + userName + '.  Welcome to the site!');
    questions();
  }
}

function questions(){
  for(var i=0; i < 4; i += 1 ) { // loop through questions
    var userAnswer = prompt(myQuestions[i]).toUpperCase(); // get user input
    checkRightAnswer(userAnswer,myAnswers[i]);
  }
  finalQuestion();
}

function checkRightAnswer(x,y){
  if(x === y){
    alert('You\'re Right!');
    totalCount++;
  } else {
    alert('Nope, that\'s wrong...');
  }
}

function numHighOrLow(correct, answer){
  if(correct < answer){
    console.log('too high prompt at numHighOrLow');
    prompt('You\'ve guessed too high! Keep guessing!');
  } else {
    console.log('too low prompt at numHighOrLow');
    prompt('You\'ve guessed too low! Keep guessing!');
  }
  console.log('end numHighOrLow');
}


// Question 6: Guessing the number with 3 tries
function questions6(){
  var numberOfChances = 0;
  var numberQuestion = parseInt(prompt('How many dirty martini\'s can I drink in one setting? (enter a number)'));
  while (numberOfChances <= 2 ) { // too low to high number 
    if(numberQuestion == myAnswers[5]){
      alert('You\'re Right!');
      totalCount++;
      questions7();
      break;
    }else{
      numHighOrLow(numberQuestion, myAnswers[5]);
      console.log(numberOfChances);
    }
    numberOfChances++;
  }
}

// Question 7: Multiple Possible Answers
function questions7(){
  var numberOfChances2 = 0;
  var iceCreamArr = myAnswers[6];
  var iceCream = 0;
  var iceCreamGuessed = false;
  // while (numberOfChances2 <= 2){ 
  //   var iceCreamQuestion = prompt('Name any 1 of 4 ice cream flavors I like?');
    while(iceCream != iceCreamArr.length || numberOfChances2 <= 2){
      var iceCreamQuestion = prompt('Name any 1 of 4 ice cream flavors I like?');
      if(iceCreamQuestion === iceCreamArr[iceCream]){
        alert('You\'re Right!');
        totalCount++;
        iceCreamGuessed = true;
        startGameLoop = true;
        finalQuestion();
        break;
      }else{
        console.log(numberOfChances2);
        alert('You\'re Wrong!');
      }
      iceCream++;
    }
    if(iceCreamGuessed){
      iceCreamGuessed == true;
    }
    numberOfChances2++;
  // }
}


// guess the final answer
function finalQuestion(){
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
}

