let buttonType=document.getElementById("typer");
let button2=document.getElementById("typer2");
let txtfield=document.getElementById("message");
buttonType.addEventListener("click", typestarter);
button2.addEventListener("click",typestopper)

function typestarter()
{
    // alert("hey")
    txtfield.removeAttribute("disabled");
    // txtfield.value='some text stuff';
    // alert("we working");
}
function typestopper()
{
    txtfield.setAttribute("disabled"," ")
}