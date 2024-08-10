import { getRandomInt } from '../utils.js';
import runGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const maxValue = 1000;
  const num = getRandomInt(maxValue);

  const question = `Question: ${num}`;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => {
  const rulesMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runPrimeGame;
