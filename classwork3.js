let starterbtn=document.getElementById("starter");
let numbers= document.getElementById("count");
let liftoff="liftoff";

starterbtn.addEventListener("click", timechanger);
let x=10;
function timechanger(){
    x=10;
    intervalid=window.setInterval(timedown,1000);
    // alert("hey")
}
function timedown()
// { alert("popping")
    numbers.innerText=x;
    x--;
   // numbers.innerText="Liftoff"
}