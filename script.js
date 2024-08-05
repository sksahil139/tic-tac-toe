let p1Score = 0;
let p2Score = 0;
let turn = 1;
let i =1;
let c1bool = true;
let c2bool = true;
let c3bool = true;
let c4bool = true;
let c5bool = true;
let c6bool = true;
let c7bool = true;
let c8bool = true;
let c9bool = true;


const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");
const c4 = document.querySelector("#c4");
const c5 = document.querySelector("#c5");
const c6 = document.querySelector("#c6");
const c7 = document.querySelector("#c7");
const c8 = document.querySelector("#c8");
const c9 = document.querySelector("#c9");
const res  = document.querySelector("#reset");
const msg = document.querySelector("#msg");
const p1 = document.querySelector("#p1-score");
const p2 = document.querySelector("#p2-score");

const check = ()=>{
    // upper row
    if(c1.innerHTML==="x" && c2.innerHTML==="x" && c3.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    else if(c1.innerHTML=== "0" && c2.innerHTML=== "0" && c3.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    // 1st coloum
    else if(c1.innerHTML=== "0" && c4.innerHTML=== "0" && c7.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";  
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c1.innerHTML=== "x" && c4.innerHTML=== "x" && c7.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    // middle row
    else if(c5.innerHTML=== "0" && c4.innerHTML=== "0" && c6.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c5.innerHTML=== "x" && c4.innerHTML=== "x" && c6.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    // lower row
    else if(c8.innerHTML=== "0" && c9.innerHTML=== "0" && c7.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c8.innerHTML=== "x" && c9.innerHTML=== "x" && c7.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    // middle coloum
    else if(c2.innerHTML=== "0" && c5.innerHTML=== "0" && c8.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c5.innerHTML=== "x" && c2.innerHTML=== "x" && c8.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    // last coloum
    else if(c3.innerHTML=== "0" && c9.innerHTML=== "0" && c6.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c3.innerHTML=== "x" && c9.innerHTML=== "x" && c6.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    // backslash diagonal
    else if(c1.innerHTML=== "0" && c5.innerHTML=== "0" && c9.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c5.innerHTML=== "x" && c1.innerHTML=== "x" && c9.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
    //slash diagonal
    else if(c3.innerHTML=== "0" && c5.innerHTML=== "0" && c7.innerHTML==="0"){
        msg.innerHTML = "player 1 wins";
        p1Score++;
        p1.innerHTML = p1Score;
        finished();
    }
    else if(c3.innerHTML=== "x" && c5.innerHTML=== "x" && c7.innerHTML==="x"){
        msg.innerHTML = "player 2 wins";
        p2Score++;
        p2.innerHTML = p2Score;
        finished();
    }
}

const finished = ()=>{
    c9bool=false;
    c8bool=false;
    c7bool=false;
    c6bool=false;
    c5bool=false;
    c4bool=false;
    c3bool=false;
    c2bool=false;
    c1bool=false;
}

res.addEventListener("click",()=>{
    i=1;
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    c4.innerHTML = "";
    c5.innerHTML = "";
    c6.innerHTML = "";
    c7.innerHTML = "";
    c8.innerHTML = "";
    c9.innerHTML = "";
    c9bool=true;
    c8bool=true;
    c7bool=true;
    c6bool=true;
    c5bool=true;
    c4bool=true;
    c3bool=true;
    c2bool=true;
    c1bool=true;
    msg.innerHTML="lets see who wins! Best of luck";
});

    c1.addEventListener("click",()=>{
        if(c1bool){
            if(i%2===0){
                c1.innerHTML = "x";
            }
            else{
                c1.innerHTML = "0";
            }
            c1bool=false;
            i++; 
            check();
        }
    })
    c2.addEventListener("click",()=>{
        if(c2bool){
            if(i%2===0){
                c2.innerHTML = "x";
            }
            else{
                c2.innerHTML = "0";
            }
            i++;
            c2bool=false;
            check();
        }
    })
    c3.addEventListener("click",()=>{
        if(c3bool){
            if(i%2===0){
                c3.innerHTML = "x";
            }
            else{
                c3.innerHTML = "0";
            }
            c3bool=false;
            i++;
            check();
        }
    })
    c4.addEventListener("click",()=>{
        if(c4bool){
            if(i%2===0){
                c4.innerHTML = "x";
            }
            else{
                c4.innerHTML = "0";
            }
            c4bool=false;
            i++;
            check();
        }
    })
    c5.addEventListener("click",()=>{
        if(c5bool){
            if(i%2===0){
                c5.innerHTML = "x";
            }
            else{
                c5.innerHTML = "0";
            }
            c5bool=false;
            i++;
            check();
        }
    })
    c6.addEventListener("click",()=>{
        if(c6bool){
            if(i%2===0){
                c6.innerHTML = "x";
            }
            else{
                c6.innerHTML = "0";
            }
            c6bool=false;
            i++;
            check();
        }
    })
    c7.addEventListener("click",()=>{
        if(c7bool){
            if(i%2===0){
                c7.innerHTML = "x";
            }
            else{
                c7.innerHTML = "0";
            }
            c7bool=false;
            i++;
            check();
        }
    })
    c8.addEventListener("click",()=>{
        if(c8bool){
            if(i%2===0){
                c8.innerHTML = "x";
            }
            else{
                c8.innerHTML = "0";
            }
            c8bool=false;
            i++;
            check();
        }
    })
    c9.addEventListener("click",()=>{
        if(c9bool){
            if(i%2===0){
                c9.innerHTML = "x";
            }
            else{
                c9.innerHTML = "0";
            }
            c9bool=false;
            i++;
            check();
        }
    })
