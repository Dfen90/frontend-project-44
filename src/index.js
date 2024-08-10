import readlineSync from 'readline-sync';

const tries = 3;

const runGame = (rulesMessage, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rulesMessage);

  for (let i = 0; i < tries; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer();
    console.log(question);
    const userInput = readlineSync.question('Your answer: ');

    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
