// @flow

import game from './index';
import { randomNumber } from './functions';

const makeQuestion = (): {value: string, correctAnswer: string} => {
  const question = randomNumber(1, 99);
  return {
    value: question,
    correctAnswer: (question % 2) ? 'no' : 'yes',
  };
};

const checkAnswer = (answer: string): boolean =>
  answer === 'yes' || answer === 'no';

export default () => {
  game(
    'What is the result of the expression?',
    makeQuestion,
    checkAnswer,
    'Please, type a number',
  );
};
