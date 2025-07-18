// app.js
const readline = require("readline");
const CarChatbot = require("./carChatbot.js");

const bot = new CarChatbot();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Car Chatbot is ready! Type 'bye' to exit.");
console.log("You can ask: color, type, price, features.");

function askQuestion() {
    rl.question("You: ", (userInput) => {
        const response = bot.getResponse(userInput);
        console.log("Bot:", response);

        if (userInput.toLowerCase().includes("bye")) {
            rl.close();
        } else {
            askQuestion();
        }
    });
}

askQuestion();
