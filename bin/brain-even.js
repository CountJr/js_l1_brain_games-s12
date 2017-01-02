#!/usr/bin/env node
/* eslint-disable no-console, no-plusplus, no-constant-condition */

// @flow

import readlineSync from 'readline-sync';

const maxRandomNumbers: number = 3;

const randomNumbers = () => {
  const arr = [];
  for (let i = 0; i < maxRandomNumbers; ++i) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
};

const getAnswer = () => {
  while (true) {
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes') {
      return [true, 'yes', 'no'];
    } else if (answer === 'no') {
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

const result: boolean = randomNumbers().reduce((acc, value) => {
  if (acc === false) {
    return acc;
  }
  console.log(`Question: ${value}`);
  const answer = getAnswer();
  const rightOrWrong = answer[0] === isOddNumber(value);
  console.log(rightOrWrong ? 'Correct!' : `'${answer[1]}' is wrong answer ;(. Correct answer was '${answer[2]}'.`);
  return rightOrWrong;
}, true);

console.log(result ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
