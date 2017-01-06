// @flow

import game from './index';
import { randomNumber } from './functions';

const makeBalanseNumber = (number) => {
  const sortedLine = number.split('').sort().join('');
  const lastIndex = sortedLine.length - 1;
  if (sortedLine[lastIndex] - sortedLine[0] <= 1) {
    return sortedLine;
  }
  const firstNumber = [+sortedLine.split('')[0] + 1];
  const lastNumber = sortedLine.split('')[lastIndex] - 1;
  const middlePart = sortedLine.slice(1, lastIndex);
  const result = firstNumber.concat(middlePart, lastNumber).sort().join('');
  return makeBalanseNumber(result);
};

const makeQuestion = () => {
  const normalNumber = String(randomNumber(100, 9999));
  const balanceNumber = makeBalanseNumber(normalNumber);
  return {
    value: `${normalNumber}`,
    correctAnswer: String(balanceNumber),
  };
};

const checkAnswer = answer => !isNaN(answer);

export default () => {
  game(
    'Find the greatest common divisor of given numbers.',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
