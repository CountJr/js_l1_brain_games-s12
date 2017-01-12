// @flow

import game from './index';

import { randomNumber } from './functions';

const chooseArithmeticSign = (): string => {
  switch (randomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const computeAnswer = (number1: number, number2: number, sign: string): number => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const makeQuestion = (): {value: string, correctAnswer: string} => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const arithmeticSign = chooseArithmeticSign();
  return {
    value: `${firstNumber} ${arithmeticSign} ${secondNumber}`,
    correctAnswer: String(computeAnswer(firstNumber, secondNumber, arithmeticSign)),
  };
};

const checkAnswer = (answer: string): boolean => !isNaN(answer);

export default () => {
  game(
    'Answer "yes" if number odd otherwise answer "no".',
    makeQuestion,
    checkAnswer,
    'Answear must be a number',
  );
};
