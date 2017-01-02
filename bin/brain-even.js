#!/usr/bin/env node
/* eslint-disable no-console, no-plusplus, no-constant-condition */

// @flow

import readlineSync from 'readline-sync';

const maxRandomNumbers = 3;

const randomNumbers = () => {
  const arr = [];
  for (let i = 0; i < maxRandomNumbers; ++i) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
};

const getAnswear = () => {
  while (true) {
    const answear = readlineSync.question('Your answer: ');
    if (answear === 'yes') {
      return [true, 'yes', 'no'];
    } else if (answear === 'no') {
      return [false, 'no', 'yes'];
    }

    console.log('Please, answear \'yes\' or \'no\'');
  }
};

const isOddNumber = num => !(num % 2);

const helloMessage: string = 'Welcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".';
console.log(`${helloMessage}\n`);
const userName: string = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);

const result = randomNumbers().reduce((acc, value) => {
  if (acc === false) {
    return acc;
  }
  console.log(`Question: ${value}`);
  const answear = getAnswear();
  const rightOrWrong = answear[0] === isOddNumber(value);
  console.log(rightOrWrong ? 'Correct!' : `'${answear[1]}' is wrong answer ;(. Correct answer was '${answear[2]}'.`);
  return rightOrWrong;
}, true);

console.log(result ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
