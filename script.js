let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let newgamebtn=document.querySelector("#newgame");
let msgbox=document.querySelector(".msg-box")

let turnO=true;
//winning patterns
const winpatterens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableboxs();
    msgbox.classList.add("hide")
}
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")

        if(turnO){
            box.innerText="O";
            turnO=false;
            console.log("O")
        }
        else{
            box.innerText="X";
            turnO=true;
            console.log("X")
        }
        box.disabled=true;

        checkwinner();
    });
    
});
//disableboxes
const disableboxs=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
// enable boxes
const enableboxs=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
};


const showwinner=(winner)=>{
    msg.innerText=`congruatation winner is ${winner}`;
    msgbox.classList.remove("hide")
    disableboxs();
};
const checkwinner=()=>{
    for( let patteren of winpatterens){
        let pos1val= boxs[patteren[0]].innerText;
        let pos2val= boxs[patteren[1]].innerText;
        let pos3val= boxs[patteren[2]].innerText;

        if(pos1val!="" && pos2val!="" &&pos3val!=""){
            if(pos1val==pos2val&& pos2val==pos3val){
                showwinner(pos1val);
            }
        }
    }
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
