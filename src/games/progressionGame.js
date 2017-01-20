// @flow

import game from '../index';
import { randomNumber } from '../functions';

const progressionLength = 10;

export const makeQuestion =
  (randomFunction: Function = randomNumber):
  {value: string, correctAnswer: string} => {
    const startNumber = randomFunction(10, 99);
    const step = randomFunction(1, 9);
    const guessIndex = randomFunction(2, progressionLength - 2);
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

export const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default (): void =>
  game(
    'What number is missing in this progression?',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
