const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Hello ${name}! Welcome to Node.js readline.`);

    rl.question('How old are you? ', (answer) => {
        const age = Number(answer);

        if (Number.isNaN(age) || age < 0) {
            console.log(`"${answer}" is not a valid age.`);
        } else if (age < 18) {
            console.log(`You are ${age} - still a minor.`);
        } else {
            console.log(`You are ${age} - an adult.`);
        }

        rl.close();
    });
});