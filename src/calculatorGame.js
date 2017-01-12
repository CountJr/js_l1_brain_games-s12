// @flow

import game from './index';

import { randomNumber } from './functions';

const makeSignAndResult = (number1: number, number2: number): {sing: string, result: number} => {
  switch (randomNumber(1, 3)) {
    case 1:
      return { sing: '+', result: number1 + number2 };
    case 2:
      return { sing: '-', result: number1 - number2 };
    default:
      return { sing: '*', result: number1 * number2 };
  }
};

const makeQuestion = (): {value: string, correctAnswer: string} => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const signAndResult = makeSignAndResult(firstNumber, secondNumber);
  return {
    value: `${firstNumber} ${signAndResult.sing} ${secondNumber}`,
    correctAnswer: String(signAndResult.result),
  };
};

const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default () => {
  game(
    'Answer "yes" if number odd otherwise answer "no".',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
