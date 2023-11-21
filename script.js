function stone(){
     /* multiply with 12 makes the randomNumber as a valid number 
        and using floor method to round off the number */
        
        const randomNumber=Math.floor(Math.random()*12);
        const computerNumbe=Math.floor(Math.random()*12);
    
    let computerMove = '';

    // generates random move on user and compuer

    if(randomNumber >= 0 && randomNumber <= 4){
        computerMove = 'rock';
    }else if(randomNumber >= 4 && randomNumber <= 8){
        computerMove = 'paper';
    }else if(randomNumber >= 8 && randomNumber <= 12){
        computerMove = 'Sicssor';
    }

    // checks with computer move | Result generated

    if (computerMove === 'rock' ){
        document.getElementById("stone").innerHTML = "Play Again &#128543; ";
    }else if (computerMove === 'paper'){
        document.getElementById("stone").innerHTML = "You Lose  &#128078;";
    }else if(computerMove === 'Sicssor') {
        document.getElementById("stone").innerHTML = "You Win  &#128077; ";
    }
}

function paper(){
    /* multiply with 12 makes the randomNumber as a valid number 
        and using floor method to round off the number */

    const randomNumber=Math.floor(Math.random()*12);
    
    let computerMove = '';

    // generates random move on user and compuer

    if(randomNumber >=0 && randomNumber <= 4){
        computerMove = 'rock';
    }else if(randomNumber >=4 && randomNumber <= 8){
        computerMove = 'paper';
    }else if(randomNumber >=8 && randomNumber <= 12){
        computerMove = 'Sicssor';
    }

    // checks with computer move | Result generated

    if (computerMove === 'rock' ){
        document.getElementById("stone").innerHTML = "You Win  &#128077; " ;
    }else if (computerMove === 'paper'){
        document.getElementById("stone").innerHTML ="Play Again &#128543; "; 
    }else if(computerMove === 'Sicssor') {
        document.getElementById("stone").innerHTML ="You Lose  &#128078; ";
    }
}

function scissor(){
     /* multiply with 12 makes the randomNumber as a valid number 
        and using floor method to round off the number */
        
        const randomNumber=Math.floor(Math.random()*12);
    
    let computerMove = '';

    // generates random move on user and compuer

    if(randomNumber >=0 && randomNumber <= 4){
        computerMove = 'rock';
    }else if(randomNumber >=4 && randomNumber <= 8){
        computerMove = 'paper';
    }else if(randomNumber >=8 && randomNumber <= 12){
        computerMove = 'Sicssor';
    }

    // checks with computer move | Result generated

    if (computerMove === 'rock' ){
        document.getElementById("stone").innerHTML = "You Lose  &#128078;";
    }else if (computerMove === 'paper'){
        document.getElementById("stone").innerHTML ="You Win  &#128077; "; 
    }else if(computerMove === 'Sicssor') {
        document.getElementById("stone").innerHTML = "Play Again &#128543; ";
    }
}
