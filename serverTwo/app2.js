import chalk from "chalk"
import readline from "readline-sync"

let name = readline.question("what is your name ? :");
let age = readline.questionInt("what is your age ? :");
let likeCoding = readline.question("do you like coding ? y/n :");

console.log("---summary---");
console.log(`name : ${name}`);
console.log(`age : ${age}`);
if(likeCoding = "yes"){
    console.log(`likes coding =yes`);
}else if (likeCoding = `no`){
    console.log(`likes coding = no`);
}