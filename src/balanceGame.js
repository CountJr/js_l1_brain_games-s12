// @flow

import game from './index';
import { randomNumber } from './functions';

const makeBalansedNumber =
  (number: string): string => {
    const sortedLine = number.split('').sort().join('');
    const lastIndex = sortedLine.length - 1;
    if (+sortedLine[lastIndex] - +sortedLine[0] <= 1) {
      return sortedLine;
    }
    const firstNumber = [+sortedLine.split('')[0] + 1];
    const lastNumber = sortedLine.split('')[lastIndex] - 1;
    const middlePart = sortedLine.slice(1, lastIndex);
    return makeBalansedNumber([firstNumber, middlePart, lastNumber].join(''));
  };

export const makeQuestion =
  (randomFunction: Function = randomNumber):
  {value: string, correctAnswer: string} => {
    const normalNumber = String(randomFunction(100, 9999));
    const balancedNumber = makeBalansedNumber(normalNumber);
    return {
      value: `${normalNumber}`,
      correctAnswer: balancedNumber,
    };
  };

export const checkAnswer =
  (answer: string): boolean =>
    !isNaN(answer);

export default (): void => {
  game(
    'Balance the given number.',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
