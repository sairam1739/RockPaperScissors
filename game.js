let usercou=0;
let compcou=0;
document.querySelector("body").style.backgroundColor="pink";
//document.body.style.backgroundImage = "url('./images/bg2_img.jpeg')";
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const usco=document.querySelector("#user-score");
const csco=document.querySelector("#computer-score");




const gencompchoice=()=>{
const options =["rock","paper","scissors"];

const randidx = Math.floor(Math.random(options)*3);
return options[randidx];
}
const drawgame = ()=>{
  
  msg.innerText="game was draw!";
  msg.style.backgroundColor = "blue";
    }

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        usercou++;
        usco.innerText=usercou;
       // console.log(`You win ${userchoice} beats ${compchoice}`);
        msg.innerText =`You win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "yellow";
    }else{
        compcou++;
        csco.innerText=compcou;
       // console.log(`You lose ${compchoice} beats ${userchoice}`);
        msg.innerText=`You lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
};


const playgame =(userchoice)=>{
    //user
   // console.log("user choice= ",userchoice);
    //computer
    const compchoice = gencompchoice();
    //console.log("comp choice= ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{

        let userwin = true;

       if(userchoice=="rock"){
       userwin=  compchoice==="paper" ? false : true  ;
       } else if(userchoice=="paper"){
        userwin=  compchoice==="scissors" ? false : true  ;
       }else{
        userwin=  compchoice==="rock" ? false : true  ;

       }
       showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    //console.log(choice);
    const userchoice =choice.getAttribute("id");
    choice.addEventListener("click",()=>{
           
           playgame(userchoice);
    })
})