/* eslint-disable no-console */

// @flow

import readlineSync from 'readline-sync';

const gameRounds = 3;

const sayHello = (gameTask: string) => {
  const helloMessage = `Welcome to the Brain Games!\n${gameTask}`;
  console.log(`${helloMessage}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const getAnswer = (checkAnswer: Function, wrongAnswerText: string) => {
  for (;;) {
    const answer = readlineSync.question('Your answer: ');
    if (checkAnswer(answer)) {
      return answer;
    }

    console.log(wrongAnswerText);
  }
};

export default (
  gameTask: string,
  makeQuestion: Function,
  checkAnswer: Function,
  wrongAnswerText: string,
) => {
  let success = true;
  const userName = sayHello(gameTask);
  for (let i = 1; i <= gameRounds; i += 1) {
    const gameData = makeQuestion();
    console.log(`Question: ${gameData.value}`);
    const answer = getAnswer(checkAnswer, wrongAnswerText);
    const correctAnswer = gameData.correctAnswer;
    if (answer !== correctAnswer) {
      success = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
    console.log('Correct!');
  }

  console.log(success ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};
