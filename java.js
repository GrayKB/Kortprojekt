

var kingOfSpades = document.getElementById('kS');


function kingOfSpadesMoved(){
    console.log("king of spades");
    kingOfSpades.classList.toggle("blur");
}


var imgObj = null;
var textObj = null;

var highscoreObj = null;

var timesPlayedObj = null;

var animate ;
let points = 0;
let playTime = 0;
let lastPoints = 0;






function init(){
   
   imgObj = document.getElementById('kS');
   imgObj.style.position= 'absolute'; 
   imgObj.style.top = '255px';
   imgObj.style.left = '0px';
   imgObj.style.visibility='hidden';


document.getElementById('points').innerHTML = points;



   points++;

   moveRight();

   if(points == 1){
      document.getElementById('start').innerHTML = "" ;
   }
      if(points == 5){
      document.getElementById('start').innerHTML = "FASTER" ;
   }

   if(points == 10){
      document.getElementById('start').innerHTML = "CAN YOU KEEP UP?" ;
   }

      if(points == 15){
      document.getElementById('start').innerHTML = "FASTER! FASTER! FASTER!" ;
   }

      if(points == 20){
      document.getElementById('start').innerHTML = "SUPER FAST!" ;
   }
} 

function moveRight(){
if (parseInt(imgObj.style.left)<=1050)
{
   imgObj.style.left = parseInt(imgObj.style.left) + 1 + 'px';
   imgObj.style.visibility='visible';
   animate = setTimeout(moveRight,20); 
   
  }
else
  stop();
 
}

function stop(){



   if(points > lastPoints){  
   lastPoints = points;
   lastPoints -= 1;
}

document.getElementById('highscore').innerHTML = "Highscore: " + lastPoints;
   points = 0;

   
   playTime = playtime - points;
   playTime +=1;
   document.getElementById('timesPlayed').innerHTML = playTime;

   
   
  

   clearTimeout(animate);
}
//window.onload =init;