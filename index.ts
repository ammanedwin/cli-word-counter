#!/usr/bin/env node
import inquirer from "inquirer";
function countWords(text: string): number {
    
    const words = text.trim().split(/\s+/);
    
    return words.length;
  }
  
  function countLetters(text: string): number {
    
    const letters = text.trim().replace(/\s+/g, "").length;
    
    return letters;
  }
  
  async function startWordCounts(wordCounter: (text: string) => number, letterCounter: (text: string) => number) {
    do {
      let answer = await inquirer.prompt([
        {
          type: "input",
          message: "Write text here",
          name: "text",
        },
      ]);
  
      
      console.log(`Word count: ${wordCounter(answer.text)}`);
      console.log(`Letter count: ${letterCounter(answer.text)}`);
      
  
      let response = await inquirer.prompt([
        {
          type: "list",
          message: "Do you want to continue?",
          name: "continue",
          choices: ["Yes", "No"],
        },
      ]);
  
      if (response.continue === "No") {
        console.log("Goodbye! See you soon");
        break;
      }
    } while (true);
  }
  
  startWordCounts(countWords, countLetters);
  