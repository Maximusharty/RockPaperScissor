
//Start here
//Select Start Game button and listen for click to display rock paper scissor
const btn=document.querySelector('.button');
btn.addEventListener('click',game);

function game(e){
    //Initialize the Game Score
    let Player_Score=0;
    let Computer_Score=0;
    let Draws=0;
    count=0;
    //Hide the Start Game button
    btn.style.display="none"
    
   
    
    const body=document.querySelector('body');
    
    const div=document.createElement('div');
    
   
    
    //Create three button and add text to it and append it to div
    const button1=document.createElement('button');
    const button2=document.createElement('button');
    const button3=document.createElement('button');
    button1.classList.add('button1');
    button2.classList.add('button2');
    button3.classList.add('button3');
   
    

   



    button1.textContent="Rock";
    button2.textContent="Scissor";
    button3.textContent="Paper";
    body.appendChild(div);
    const content=document.querySelector('div');
    content.appendChild(button1);
    content.appendChild(button2);
    content.appendChild(button3);
    //Listen for click on each button to determine the player selection 
    const buttons=document.querySelectorAll('button');
    


    buttons.forEach((button)=>{
       
       button.addEventListener('click',gameplay)
        
    
    });
    
      //Gives computer choice(randomly generated)
      function getComputerchoice(){
        options=["rock","paper","scissor"];
        choice=Math.floor(Math.random()*3);
        return options[choice];
      }


    
   function gameplay(e){
    //First of all determine the player choice through button clicked
    let getPlayerchoice;
    count++;//Each time the gameplay is run increase count by 1
    if(e.target.textContent=="Rock"){
        getPlayerchoice="rock";
        
    }
    else if(e.target.textContent=="Scissor"){
        getPlayerchoice="scissor";
        
    }
    else{
        getPlayerchoice="paper";
        
    }
    //Determine who wins the round or it is a draw and count is also checked 
    const playerSelection=getPlayerchoice; 
    const computerSelection=getComputerchoice();
    result= playRound(computerSelection,playerSelection);
    
    if(result=="PlayerWinsThisRound"){
        Player_Score=Player_Score+1;
        const body=document.querySelector('body');
        const round_winner=document.createElement('div');
        round_winner.textContent="Player Win this Round";
        round_winner.classList.add("result");
        body.appendChild(round_winner);
        buttons.forEach((button)=>{
       
       button.addEventListener('click',()=>{
        
        round_winner.style.display="none";
        
       })
        if(count>4){
            round_winner.style.display="none";
        }
    
    });
        
    
         
         
       
         

    }
    else if(result=="ComputerWinsThisRound"){
         Computer_Score=Computer_Score+1;
        const body=document.querySelector('body');
        const round_winner=document.createElement('div');
        round_winner.textContent="Computer Win this Round";
        round_winner.classList.add("result");
        body.appendChild(round_winner);
        buttons.forEach((button)=>{
       
       button.addEventListener('click',()=>{
        
        round_winner.style.display="none";
        
       })
        if(count>4){
            round_winner.style.display="none";
        }
    
    });
        
      
        

    }
    else {
       Draws=Draws+1;
        const body=document.querySelector('body');
        const round_winner=document.createElement('div');
        round_winner.textContent="None of you won the round";
        round_winner.classList.add("result");
        body.appendChild(round_winner);
        buttons.forEach((button)=>{
       
       button.addEventListener('click',()=>{
        
        round_winner.style.display="none";
        
       })
        if(count>4){
            round_winner.style.display="none";
        }
    
    });
        
       

       

    }
    //Determine if the game has been played five rounds and compare player and computer score
    if(Player_Score>Computer_Score&&count==5){
  
        const message=document.querySelector('.message');
        
        const para=document.createElement('p');
        const div=document.createElement('div');
        const d_score=document.createElement('div');
        const c_score=document.createElement('div');
       
        para.textContent="Player wins this tournament";
        div.textContent=`Player Score: ${Player_Score}`;
        d_score.textContent=`Draws:${Draws}`;
        c_score.textContent=`Computer Score:${Computer_Score}`;
        
        message.appendChild(para);
        message.appendChild(div);
        message.appendChild(d_score);
        message.appendChild(c_score);
        const display=document.querySelector('.display');
        display.style.display="none";
        const button=document.createElement('button');
        button.textContent="Play Again";
        message.appendChild(button);
        button.addEventListener('click',()=>{
            para.style.display="none";
            button.style.display="none"
            div.style.display="none";
            d_score.style.display="none";
            c_score.style.display="none";
            setTimeout(function(){
            display.style.display="flex";
        },300);
            
        
        })
        //reset count if playagain button is clicked 
        //Hide the rock,paper scissor button to avoid confusion
        //same thing in else if and else if below
        count=0;
        Player_Score=0;
        Computer_Score=0;
        Draws=0;
        const boxes=document.querySelectorAll('.result');
        boxes.forEach(box=>{
            box.remove();
        })

        
        

       
            
            
         
         
         
        

   

}
    else if(Computer_Score>Player_Score&&count==5){
        const message=document.querySelector('.message');
        
        const para=document.createElement('p');
        const div=document.createElement('div');
        const d_score=document.createElement('div');
        const c_score=document.createElement('div');
       
        para.textContent="Computer wins this tournament. We are doomed";
        div.textContent=`Player Score: ${Player_Score}`;
        d_score.textContent=`Draws:${Draws}`;
        c_score.textContent=`Computer Score:${Computer_Score}`;
        
        message.appendChild(para);
        message.appendChild(div);
        message.appendChild(d_score);
        message.appendChild(c_score);
        const display=document.querySelector('.display');
        display.style.display="none";
        const button=document.createElement('button');
        button.textContent="Play Again";
        message.appendChild(button);
        button.addEventListener('click',()=>{
            para.style.display="none";
            button.style.display="none"
            div.style.display="none";
            d_score.style.display="none";
            c_score.style.display="none";
            setTimeout(function(){
            display.style.display="flex";
        },300);
            
        
        })
        count=0;
        Player_Score=0;
        Computer_Score=0;
        Draws=0;
        const boxes=document.querySelectorAll('.result');
        boxes.forEach(box=>{
            box.remove();
        })

      
   
}

    else if(Computer_Score==Player_Score&&count==5) {
        const message=document.querySelector('.message');
        
        const para=document.createElement('p');
        const div=document.createElement('div');
        const d_score=document.createElement('div');
        const c_score=document.createElement('div');
       
        para.textContent="It is a draw between you and computer";
        div.textContent=`Player Score:${Player_Score}`;
        d_score.textContent=`Draws:${Draws}`;
        c_score.textContent=`Computer Score:${Computer_Score}`;
        
        message.appendChild(para);
        message.appendChild(div);
        message.appendChild(d_score);
        message.appendChild(c_score);
        const display=document.querySelector('.display');
        display.style.display="none";
        const button=document.createElement('button');
        button.textContent="Play Again";
        message.appendChild(button);
        button.addEventListener('click',()=>{
            para.style.display="none";
            button.style.display="none"
            div.style.display="none";
            d_score.style.display="none";
            c_score.style.display="none";
            setTimeout(function(){
            display.style.display="flex";
        },300);
            
        
        })
        count=0;
        Player_Score=0;
        Computer_Score=0;
        Draws=0;
        const boxes=document.querySelectorAll('.result');
        boxes.forEach(box=>{
            box.remove();
        })
        



   
}
    

   


       
        

    }
    //Decides the winner of the a round of rock paper scissor
    //Core of the program that compares the selection and determines who wins each round
    function playRound(computerSelection,playerSelection){
        switch(true){
            case (computerSelection=="rock") && (playerSelection=="paper"):
                
                return "PlayerWinsThisRound";
                
    
                
            case (computerSelection=="rock") && (playerSelection=="scissor"):
                
                return "ComputerWinsThisRound";
                
            case (computerSelection=="rock") && (playerSelection=="rock"):
                
                return "ItIsDraw";
                
            case((computerSelection=="paper")&&(playerSelection=="paper")):
                
                return "ItIsDraw";
                
            case((computerSelection=="paper")&&(playerSelection=="scissor")):
                
                return "PlayerWinsThisRound";
                
            case((computerSelection=="paper")&&(playerSelection=="rock")):
                
                return "ComputerWinsThisRound";
                
            case((computerSelection=="scissor")&&(playerSelection=="paper")):
                
                return "ComputerWinsThisRound";
                
            case((computerSelection=="scissor")&&(playerSelection=="scissor")):
                
                return "ItIsDraw";
                
            case((computerSelection=="scissor")&&(playerSelection=="rock")):
                
                return "PlayerWinsThisRound";
            
            default:
                console.log("you are wrong sir");
               
        }

      
    






    }
    
}
    

   
    


   
  
    




   





