let userScore=0;
let compScore=0;

const  choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#User-score")
const compScorePara=document.querySelector("#Compt-score")

const genCompChoice=()=>{
    const option=['rock','paper','scissors']
    const randInd=Math.floor(Math.random()*3)
    return option[randInd]
}


const gameDraw=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";

}




const showWinner=(userWin,userChoice,comptChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${comptChoice}`;
        msg.style.backgroundColor="green";
    }

    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${comptChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame=(userChoice)=>{
    const comptChoice=genCompChoice();

    console.log(userChoice,comptChoice,compScore)
    
    if (userChoice===comptChoice){
        gameDraw();
    }

    else {
        let userWin=true;
        if (userChoice==="rock"){
            userWin=comptChoice==="paper"?false:true;
             

        }

        else if(userChoice==="paper"){
            userWin=comptChoice==="scissor"?false:true;
              
        
        }

        else{
            userWin=comptChoice==="rock"?false:true;
            
        }
    

        showWinner(userWin,userChoice,comptChoice);};

}

choices.forEach((choice)=>{choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
})
})


