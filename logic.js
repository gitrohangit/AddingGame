
//var's write our script here!

var riddle = {};

//to generate random numbers   
function randomNumber(min,max){
  return Math.floor(Math.random() * (max-min+1) +min);
}

//gets called onload of the body
function playGame(){

  var field1 = randomNumber(20,50);
  var field2 = randomNumber(20,50);
  var result = field1 + field2;
  var resultsArray = generateRandomOptions(result);
  resultsArray.push(result); 
  resultsArray.sort(function(a,b) {return 0.5 - Math.random()});

  riddle = {  
    field1 : field1,
    field2 : field2,
    resultsArray: resultsArray, 
    answer:result
  };

  document.getElementById("field1").innerHTML = riddle.field1;
  document.getElementById("field2").innerHTML = riddle.field2;
  document.getElementById("option1").innerHTML = riddle.resultsArray[0];
  document.getElementById("option2").innerHTML = riddle.resultsArray[1];
  document.getElementById("option3").innerHTML = riddle.resultsArray[2];
  document.getElementById("option4").innerHTML = riddle.resultsArray[3];
}


//generate random options
function generateRandomOptions(sum){
  var resultsArray = [];
  var randomNumberArray = []; 

  while(randomNumberArray.length < 3){
    var random = randomNumber(1,10);
    if(randomNumberArray.indexOf(random) > -1)
      continue;
    randomNumberArray.push(random);
  }

  for(var i = 0; i < 3;i++){

    var addSubtract = randomNumber(0,1);
    var result = sum; 

    if(addSubtract === 1){
    //add number to result
    result += randomNumberArray[i];
  }else{
    //subtract random number from result
    result -= randomNumberArray[i];
  }

  resultsArray.push(result);
}

console.log(resultsArray);

return resultsArray;
}

function checkAnswer(selectedElement){

  var after = document.getElementById('after');

  if(selectedElement.innerHTML == riddle.answer){
    //correct answeer
    after.classList.remove('hide');
    after.classList.add('correct');
    after.classList.add('animated'); //for animating purpose
    after.classList.add('zoomInDown'); //for animating purpose
    after.innerHTML = "Good Job!! Play again by pressing the below button";
  }else{
    //wrong answer
    after.classList.remove('hide');
    after.classList.add('wrong');
    after.classList.add('animated'); //for animating purpose
    after.classList.add('zoomInDown'); //for animating purpose
    after.innerHTML = "Wrong Answer.Please try again by pressing the below button";
  }
}

function playAgain(){

  var after = document.getElementById('after');
  after.classList.add('hide');
  after.classList.remove('correct');
  after.classList.remove('wrong');
  playGame();
}
