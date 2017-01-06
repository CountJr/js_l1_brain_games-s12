// @flow

import game from './index';

import { randomNumber } from './functions';

const chooseArithmeticSign = () => {
  switch (randomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const computeAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const makeQuestion = () => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const arithmeticSign = chooseArithmeticSign();
  return {
    value: `${firstNumber} ${arithmeticSign} ${secondNumber}`,
    correctAnswer: String(computeAnswer(firstNumber, secondNumber, arithmeticSign)),
  };
};

const checkAnswer = answer => !isNaN(answer);

export default () => {
  game(
    'Answer "yes" if number odd otherwise answer "no".',
    makeQuestion,
    checkAnswer,
    'Answear must be a number',
  );
};
