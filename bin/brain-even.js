#!/usr/bin/env node
/* eslint-disable no-console */
// @flow
import readlineSync from 'readline-sync';

const helloMessage: string = 'Welcome to the Brain Games!';
console.log(`${helloMessage}\n`);

const userName: string = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
