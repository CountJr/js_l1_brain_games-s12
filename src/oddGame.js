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

export default (): void => {
  game(
    'Answer "yes" if number odd otherwise answer "no"',
    makeQuestion,
    checkAnswer,
    'Please, answer "yes" or "no"',
  );
};
