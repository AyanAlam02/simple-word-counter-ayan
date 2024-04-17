#!/usr/bin/env node

// Import 'inquirer' module, which is a command line interface package for Node.js
import inquirer from "inquirer";

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
const words = ans.Sentence.trim().split(" ");

// Print the array of words to the console
console.log(words);

// Print the word count of the sentence to the console
console.log(`Your Word Count For The Given Sentence Is ${words.length}`);

console.log("\n\n\nMade By Ayan Alam");

