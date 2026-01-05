let prompt=require('prompt-sync')();
let a=Number(prompt("enter a"))
let b=Number(prompt("enter b"))
function sum(a, b) {
   return a+b;
   
}
console.log(sum(a,b))

module.exports = {sum}






function calculateCompoundInterest(P, r, t, n) {

     let A = P * Math.pow(1 + r / n, n * t);
    return (A - P).toFixed(2);
}
