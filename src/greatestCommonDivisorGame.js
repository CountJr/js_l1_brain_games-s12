// @flow

import game from './index';
import { randomNumber } from './functions';

const calculateGcd = (firstNumber: number, secondNumber: number): number =>
  (secondNumber === 0
    ? Math.abs(firstNumber)
    : calculateGcd(secondNumber, firstNumber % secondNumber));

export const makeQuestion =
  (randomFunction: Function = randomNumber):
  {value: string, correctAnswer: string} => {
    const firstNumber = randomFunction(1, 99);
    const secondNumber = randomFunction(1, 99);
    return {
      value: `${firstNumber} ${secondNumber}`,
      correctAnswer: `${calculateGcd(firstNumber, secondNumber)}`,
    };
  };

export const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default (): void => {
  game(
    'Find the greatest common divisor of given numbers.',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
