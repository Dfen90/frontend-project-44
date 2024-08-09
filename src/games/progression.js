import { getRandomInt } from '../utils.js';
import { runGame } from '../index.js';

const generateProgression = (length, start, step) =>
  Array.from({length}, (_, i) => start + i * step);

const hideElement = (progression, index) => {
  const newProgression = [...progression];
  newProgression[index] = '..';
  return newProgression;
};

const generateQuestionAndAnswer = () => {
  const progressionLength = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);
  const progression = generateProgression(progressionLength, start, step);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  const questionProgression = hideElement(progression, hiddenIndex);

  const question = `Question: ${questionProgression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const rulesMessage = 'What number is missing in the progression?';
  runGame(rulesMessage, generateQuestionAndAnswer);
};

export default runProgressionGame;
