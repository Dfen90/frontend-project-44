#!/usr/bin/env node

import readlineSync from 'readline-sync';
const isEven = (num) => num % 2 === 0;
const game = () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is number is even, otherwise answer "no".');

for (let round = 0; round < 3; round++) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct anwser was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
    }
    console.log('Correct!');
}
console.log(`Congratulations, ${userName}!`);
};

game();
