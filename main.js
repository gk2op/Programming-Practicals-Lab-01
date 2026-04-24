console.log("wlecome to event handling in js");


let counter = 0;
const clickedcall = ()=>{
    console.log("button click ",++counter);
    document.getElementById("counter text").innerText = "click  me" + counter;
}
const counterbutton = document.getElementById("counter text");
counterbutton.addEventListener("click",clickedcall);

    // one time offer button code
let offerclaimed = false;
const onetimeoffercalimed = ()=>{
    if(offerclaimed){
        alert("offer already claimed");
    }else{
        alert ("offer claimed $1000 credited to your account");
        offerclaimed = true;
        onetimeofferbutton.removeEventListener("click",onetimeoffercalimed);
        onetimeofferbutton.setAttribute("disabled","true");
    }
}
const onetimeofferbutton = document.getElementById("onetimeoffer");
onetimeofferbutton.addEventListener("click",onetimeoffercalimed);


