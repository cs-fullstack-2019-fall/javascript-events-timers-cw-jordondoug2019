let checker=document.getElementById("check");

checker.addEventListener("click", nocheck);
function nocheck(ev){
    alert("I told you not to click this!");
    ev.preventDefault();
}