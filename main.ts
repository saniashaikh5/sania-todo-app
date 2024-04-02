#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true;

console.log(chalk.magenta.bold("\n \tWELCOME TO SANIA - TODO APP\n"));


while(condition)
{
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.yellow("What you want to add in your todos?")
        },

        {
            name: "addMore",
            type: "confirm",
            message: chalk.yellowBright("Do you want to add more? "),
            default: "false"

        }
    ]);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);

}
