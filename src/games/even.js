import { getRandomInt } from '../utils.js';
import { runGame } from '../index.js';

const isEven = (num) => {
  const result = (num % 2 === 0);
  return result;
};

const generateQuestionAndAnswer = () => {
  const maxValue = 100;
  const num = getRandomInt(maxValue);

  const question = `Question: ${ num }`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => {
  const rulesMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runEvenGame;
