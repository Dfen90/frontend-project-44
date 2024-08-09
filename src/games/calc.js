import { getRandomInt } from '../utils.js';
import { runGame } from '../index.js';

const calculate = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      throw new Error(`operation '${operation}' is not defined`);
  }
};

const generateQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = getRandomInt(operations.length);

  const addMaxValue = 100;
  const multMaxValue = 25;
  const maxValue = (operationIndex < 2) ? addMaxValue : multMaxValue;

  const num1 = getRandomInt(maxValue);
  const num2 = getRandomInt(maxValue);

  const question = `Question: ${num1} ${operations[operationIndex]} ${num2}`;
  const correctAnswer = calculate(operations[operationIndex], num1, num2).toString();

  return [question, correctAnswer];
};

const runCalcGame = () => {
  const rulesMessage = 'What is the result of the expression?';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runCalcGame;