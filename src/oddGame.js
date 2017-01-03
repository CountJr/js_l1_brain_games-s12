/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const gameRounds = 3;

const randomNumber = () => Math.floor(Math.random() * 100);

const getAnswer = () => {
  for (;;) {
    const answer = readlineSync.question('Your answer: ');
    switch (answer) {
      case 'yes':
        return 'yes';
      case 'no':
        return 'no';
      default:
    }

    console.log("Please, answear 'yes' or 'no'");
  }
};

const isOddNumber = (num) => {
  const result = (num % 2) ? 'no' : 'yes';
  return result;
};

export default () => {
  const helloMessage: string = 'Welcome to the Brain Games!\nAnswer "yes" if number odd otherwise answer "no".';
  console.log(`${helloMessage}\n`);
  const userName: string = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  let success = true;

  for (let i = 1; i <= gameRounds; i += 1) {
    const value = randomNumber();
    console.log(`Question: ${value}`);
    const answer = getAnswer();
    const correctAnswer = isOddNumber(value);
    if (answer !== correctAnswer) {
      success = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}`);
      break;
    }
    console.log('Correct!');
  }

  console.log(success ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};
