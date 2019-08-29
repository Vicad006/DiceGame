/***********************************
* CHALLENGE 6

1. A player looses his ENTIRE score when e rolls two 6 in a row. After that, it's te next player's turn. (int: Always save te previous roll in a separate variable).

2. Add an input field to te HTML where players can set te winning score, so that they can change te predefined score of 100. (Hint: you can read that value with the .value property in JavaScript).

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the code for the first one.)
*/



/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

var scores, roundScore, activePlayer, gamePlaying; //dice;

// var scores = [0,0];
// var roundScore = 0;

 /*
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 */
init();

// dice = Math.floor(Math.random() * 6 ) + 1;
// console.log(dice);

// document.querySelector("#current-" + activePlayer).textContent = dice;
 
//document.querySelector("#current-" + activePlayer).innerHTML = " <em> " + dice + " </em> ";

// var x = document.querySelector( "#score-0").textContent;
//console.log(x)

/*
document.querySelector( ".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
*/

/* function btn(){
    // Do something here
}
*/

// btn();

//document.querySelector(".btn-roll").addEventListener("click", btn);

var previousDice;

document.querySelector(".btn-roll").addEventListener("click", function(){
    if (gamePlaying){
        
          
    // 1. Random number
    var dice = Math.floor(Math.random() * 6 ) + 1;
    
    // 2. Display te result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png"; 
    
    //3. Update te round score if te rolled number was not a 1
    
        if((dice == 6) && (previousDice == 6)){
        
           // Player looses score
            scores[activePlayer] = 0;   
            document.querySelector("#score-" + activePlayer ).textContent = "0";
            nextPlayer();
        }
        
        else
        
        if (dice !== 1){
        
        // Add score
        roundScore += dice;
        // roundScore = roundScore + dice; score-0
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }
    else{
        // Next player
        
        /*
        
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active")
        
        */
        
        nextPlayer();
        
         
        
        // document.querySelector(".player-0-panel").classList.remove("active");
        // document.querySelector(".player-1-panel").classList.add("active")
       
    }
     
    previousDice = Math.floor(Math.random() * 6 ) + 1;    
        
    }
    
    
});

document.querySelector(".btn-hold").addEventListener("click", function(){ 
    if(gamePlaying){
        
         // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector("#score-" + activePlayer ).textContent = scores[activePlayer];
    
    
    /*
        // Next player
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active")
        
    */
    
    
    // Check if player won the game
    
    if (scores[activePlayer] >= 100) {
        
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";
        
        document.querySelector(".dice").style.display = "none!";
          
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        
        gamePlaying = false;
    } 
    
    
    else
        {
           // Next Player
            nextPlayer();
            
        }
    
        
    }
   
    
});


function nextPlayer(){
    
        // Next player
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active")
        document.querySelector(".dice").style.display = "none";
            
}

document.querySelector(".btn-new").addEventListener("click", init //function(){
    /*
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    */
    
    // init();
//}
)

function init(){
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector( ".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    
}
























 

