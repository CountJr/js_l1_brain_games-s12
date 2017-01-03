// @flow

import game from '../index';
import { randomNumber } from './functions';

const isOddNumber = (num) => {
  const result = (num % 2) ? 'no' : 'yes';
  return result;
};

const makeQuestion = () =>
  randomNumber(1, 99);

const checkAnswer = answer =>
  answer === 'yes' || answer === 'no';

export default () => {
  game(
    'Answer "yes" if number odd otherwise answer "no".',
    makeQuestion,
    checkAnswer,
    isOddNumber,
    "Please, answear 'yes' or 'no'",
  );
};
