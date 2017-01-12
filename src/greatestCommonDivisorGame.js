// @flow

import game from './index';
import { randomNumber } from './functions';

const calculateGcd = (firstNumber: number, secondNumber: number): number =>
  (secondNumber === 0
    ? Math.abs(firstNumber)
    : calculateGcd(secondNumber, firstNumber % secondNumber));

const makeQuestion = (): {value: string, correctAnswer: string} => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  return {
    value: `${firstNumber} ${secondNumber}`,
    correctAnswer: String(calculateGcd(firstNumber, secondNumber)),
  };
};

const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default (): void => {
  game(
    'Find the greatest common divisor of given numbers.',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
