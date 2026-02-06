/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/// 1. Kunin ang mga Elements (Wag palitan ang laman nito ng numero)
const Number1 = document.getElementById("Number");
const myBtn = document.getElementById("myBtn");
const myH1 = document.getElementById("myH1");

let answer;
myBtn.onclick = function(answer){

    num = Number(Number1.value);
     answer = num % 2;
        if (answer === 1){
            myH1.textContent = `${num} is a ODD Number`;
            myH1.style.color = "blue";
        }
        else if (answer === 0){
            myH1.textContent = `${num} is a EVEN Number`;
            myH1.style.color = "green";
        }
        else{ 
           myH1.textContent = "Please Enter a Valid Number!";
            myH1.style.color = "red";
        }
        console.log(answer);
}
