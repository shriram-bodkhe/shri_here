let game =[];
let user = [];

let btns = ["yellow","green","purple","red"];

let isStart = false;
let level = 0;

let p = document.querySelector("p");
let max = 0;
document.addEventListener("keypress",function(){
        if(isStart == false){
            console.log("game is started");
            isStart = true;
            levelUp();
            
        }
        
});

function flash(ranBtn){
    ranBtn.classList.add("flash");
    setTimeout(function(){
        ranBtn.classList.remove("flash");
    },230);
}

function levelUp(){
    user = [];
    level++;
    p.innerHTML =`Level ${level}`;
    let randomInd = Math.floor(Math.random()*3);
    let ranColor= btns[randomInd];
    let ranBtn = document.querySelector(`.${ranColor}`);
    game.push(ranColor);
    console.dir(game);
    flash(ranBtn);
    
}


function checkAns(idx){
    // let idx = level - 1;
    if(user[idx] === game[idx]){
        if(user.length == game.length){
        console.log("same value");
        setTimeout(levelUp,500);
        }
    }else{
        if(level > max){
            max = level;
        }
        let h = document.querySelector(".h");
        h.innerText = `Your highest score till :${max}`;
        p.innerHTML =`Game over!,your score was <b>${level}</b>.Press any key to start again`;
         document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },100);

        reset();
    }
}

function btnPress(){
    let btn = this;
    flash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    user.push(userColor);
    checkAns(user.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnPress);
}


function reset(){
    isStart = false;
    user =[];
    game = [];
    level = 0;
}

