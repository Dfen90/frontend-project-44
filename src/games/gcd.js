import { getRandomInt } from '../utils.js';
import { runGame } from '../index.js';

const calcGcd = (num1, num2) => {
  const minValue = Math.min(num1, num2);
  let gcd = 1;
  for (let i = 1; i <= minValue; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd;
};

const generateQuestionAndAnswer = () => {
  const maxValue = 25;
  const num1 = getRandomInt(maxValue) + 1;
  const num2 = getRandomInt(maxValue) + 1;

  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = calcGcd(num1, num2).toString();

  return [question, correctAnswer];
};

const runGcdGame = () => {
  const rulesMessage = 'Find the greatest common divisor of given numbers.';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runGcdGame;
