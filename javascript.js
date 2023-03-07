//To get random choice between rock paper and scissor 
function getComputerchoice(){
    options=["rock","paper","scissor"];
    choice=Math.floor(Math.random()*3);
    return options[choice];






}
function getPlayerchoice(){
    choice=(prompt("Choose between rock paper and scissor")).toString()
    return choice
}
    //To create a variable to store who wins 
    const PlayerWinsThisRound=1;
    const ComputerWinsThisRound=2;
    const ItIsDraw=0;
    let Player_Score=0;
    let Computer_Score=0;
    let Draws=0;
    
   
    
    
    
//How the game will be actually played
function playRound(computerSelection,playerSelection){
    switch(true){
        case (computerSelection=="rock") && (playerSelection=="paper"):
            
            return PlayerWinsThisRound;
            

            
        case (computerSelection=="rock") && (playerSelection=="scissor"):
            
            return ComputerWinsThisRound;
            
        case (computerSelection=="rock") && (playerSelection=="rock"):
            
            return ItIsDraw;
            
        case((computerSelection=="paper")&&(playerSelection=="paper")):
            
            return ItIsDraw;
            
        case((computerSelection=="paper")&&(playerSelection=="scissor")):
            
            return PlayerWinsThisRound;
            
        case((computerSelection=="paper")&&(playerSelection=="rock")):
            
            return ComputerWinsThisRound;
            
        case((computerSelection=="scissor")&&(playerSelection=="paper")):
            
            return ComputerWinsThisRound;
            
        case((computerSelection=="scissor")&&(playerSelection=="scissor")):
            
            return ItIsDraw;
            
        case((computerSelection=="scissor")&&(playerSelection=="rock")):
            
            return PlayerWinsThisRound;
        
        default:
            console.log("Please check if you have entered space or please enter some value");
           
    }
}


function game(){
    for(i=0;i<5;i++){
        const playerSelection=getPlayerchoice().toLowerCase();
        const computerSelection=getComputerchoice().toString();
        
        result= playRound(computerSelection,playerSelection);
        if(result==1){
            Player_Score+=1;
             
             console.log("Player wins this round");

        }
        else if(result==2){
             Computer_Score+=1;
             console.log("Computer wins this round");

        }
        else{
           Draws+=1;
           console.log("It is a draw");

        }
        
        
       
        
        
    }
    console.log(Player_Score);
    console.log(Computer_Score);
    console.log(Draws);
    
    
    if(Player_Score>Computer_Score){
        console.log("Player wins the tournament of rock paper and scissor. Computer try that again next time in your life");
    
    }
    else if(Computer_Score>Player_Score){
        console.log("Computer wins this round don't you think it is great day");
    }
  
    else {
        console.log("it is a draw between you and computer don't worry it happens");
    }
    

    }
    
   

game();



