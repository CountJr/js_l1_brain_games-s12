// @flow

import game from './index';
import { randomNumber } from './functions';

const progressionLength = 10;

const makeQuestion = (): {value: string, correctAnswer: string} => {
  const startNumber = randomNumber(10, 99);
  const step = randomNumber(1, 9);
  const guessIndex = randomNumber(2, progressionLength - 2);
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== guessIndex) {
      result[i] = startNumber + (step * i);
    } else {
      result[i] = '..';
    }
  }
  return {
    value: `${result.join(' ')}`,
    correctAnswer: String(startNumber + (step * guessIndex)),
  };
};

const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default () => {
  game(
    'What number is missing in this progression?',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
