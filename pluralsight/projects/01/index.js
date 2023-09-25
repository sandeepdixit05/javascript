import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name: ");

if (!firstName) {
    console.error("Invalid First Name");
    process.exit(1);
} 

let lastName = prompt("Last Name: ");
if (!lastName) {
    console.error("Invalid Last Name");
    process.exit(1);
} 