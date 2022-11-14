// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`What's you name?`, name => {
//   console.log(`Hi ${name}`)
//   readline.close()
// })

// const inquirer = require("inquirer");
import inquirer from 'inquirer'

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`Hi ${answers.name}!`);
});
