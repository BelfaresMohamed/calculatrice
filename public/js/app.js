let input = document.querySelector("#input");
let clear = document.querySelector("#clear")
let equal = document.querySelector("#equal")
let derniereChar ; 
let previousChar;
let sreenlenght;
let tab = ["+","-","*","/"]








//////////////////// les functions /////////////////////


//////// qu'on clicll sur un button en affiche dans le screen
function screen(number) {
    input.value +=number;
    corect()
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
    calSynat();

}


////////////// function de vrai syntaxhe ///////////////

function calSynat() {
   

    if(tab.includes(derniereChar) && sreenlenght==1){
        removechar()
    }
    if (tab.includes(derniereChar) && tab.includes(previousChar)) {
        if(derniereChar == previousChar){
             removechar();
        }
        else{
           input.value =  input.value.slice(0,sreenlenght-2)+input.value.slice(input.value.length-1)
           console.log(input.value);
        }
       
    }
   
}


//////// function remove last char //////////////

function removechar() {
    input.value = input.value.substring(0,input.value.length-1)
}

/////////// 0 //////////
function corect() {
    
   if (input.value.charAt(0)==0) {
       input.value= input.value.substring(1,input.value.length-1);
        console.log(input.value);
   }
}

