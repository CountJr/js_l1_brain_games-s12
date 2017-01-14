// @flow

import game from './index';

import { randomNumber } from './functions';

const makeSignAndResult =
  (number1: number, number2: number, randomFunction: Function):
  {sing: string, result: number} => {
    switch (randomFunction(1, 3)) {
      case 1:
        return { sing: '+', result: number1 + number2 };
      case 2:
        return { sing: '-', result: number1 - number2 };
      default:
        return { sing: '*', result: number1 * number2 };
    }
  };

export const makeQuestion =
  (randomFunction: Function = randomNumber):
  {value: string, correctAnswer: string} => {
    const firstNumber = randomFunction(1, 99);
    const secondNumber = randomFunction(1, 99);
    const signAndResult = makeSignAndResult(firstNumber, secondNumber, randomFunction);
    return {
      value: `${firstNumber} ${signAndResult.sing} ${secondNumber}`,
      correctAnswer: `${signAndResult.result}`,
    };
  };

export const checkAnswer =
  (answer: string): boolean =>
    !isNaN(answer);

export default (): void => {
  game(
    'What is the result of the expression?',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
