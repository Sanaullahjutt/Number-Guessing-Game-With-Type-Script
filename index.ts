 

 import inquirer from "inquirer"
 //1= computer will generate a random number
 //2= user input for guessing number
 //3= compare user input with computer generated number number and show result

 const randomNumber = Math.floor(Math.random()*10+1);
 console.log(randomNumber)
 const answer= await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type:"number",
    message:"please guess a number:",
 },
]);
console.log(answer)
if(answer.userGuessedNumber === randomNumber){
    console.log("congratuallations! you gussed right number between 1-10.");
}
else{
    console.log("you guessed wrong number.")
}