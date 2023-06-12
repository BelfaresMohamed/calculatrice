let input = document.querySelector("#input");
let clear = document.querySelector("#clear")
let equal = document.querySelector("#equal")
let derniereChar ; 
let previousChar;
let sreenlenght;








//////////////////// les functions /////////////////////


//////// qu'on clicll sur un button en affiche dans le screen
function screen(number) {
    input.value +=number;
    sreenlenght = input.value.length;
    derniereChar = number;
    previous()
}


///////// clear /////////////////
clear.addEventListener("click",()=>{
    input.value =""

})

////////// function eval ////////////////////

equal.addEventListener("click",()=>{
    input.value = eval(input.value)
})

/////////// previous number ///////////

function previous() {
    previousChar = input.value.substring(sreenlenght-2,sreenlenght-1);

    console.log(previousChar);
    console.log(derniereChar);
}
