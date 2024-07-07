import runGame from '../index.js';
import { getRandomInt, getRandomOperator } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const gameData = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(eval(question));
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, gameData);
