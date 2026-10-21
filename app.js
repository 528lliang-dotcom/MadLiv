/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));

//My base variables
let story
let name = prompt("Enter your name:")
let treasure = prompt("Give your favorite food:")
let treasureAmt = Number(prompt("Pick a number under 25:"))
let person = prompt("Enter a someone else's name:")
let adj1 = prompt("Enter an adjective:")
let evil = prompt("Enter a someone else's name:")
let adj2 = prompt("Enter an adjective:")
let adj3 = prompt("Enter an adjective:")
let AmtLost = Number(prompt("Pick a number less than" + " " + treasureAmt + ":"))

// PART 2 — DATA TYPES
// TODO: Declare a real Boolean: const isRidiculous = true; (true is NOT "true").
// TODO: Log typeof for a string, a number and a Boolean with labels.
// Hint: console.log("Animal type:", typeof animal);

console.log(typeof story)
console.log(typeof name)
console.log(typeof treasure)
console.log(typeof treasureAmt)
console.log(typeof adj1)
console.log(typeof person)
console.log(typeof evil)
console.log(typeof adj2)
console.log(typeof adj3)
console.log(typeof AmtLost)

// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

//variables based on the variables up
let AmtLeft = treasureAmt - AmtLost
let totalPrice = AmtLeft * 10
let RemainIfSellInPairs = AmtLeft % 2
console.log(RemainIfSellInPairs)

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;


story = `Once upon a time, the ${adj1} ${name} went out with their ${adj3} ${treasureAmt} ${treasure} to the magically paved dirt road. They went to ${person}'s store to buy cheese wheels. ${person} said, sadly, that their shipment of cheese wheels was delayed. Distraught, ${name} went back home, but the ${adj2} ${evil} pickpocketed ${AmtLost} of their ${treasure}, leaving only ${AmtLeft} of it to sell tomorrow. They return home with only enough to get ${totalPrice}$ from selling his treasured, ${adj3}, ${treasure}s.`

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
document.getElementById("madlib-output").innerHTML = story;
//changed the title under
document.getElementById("Title").innerHTML = `${name}'s Journey`
// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
