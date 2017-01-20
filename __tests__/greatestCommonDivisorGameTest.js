import { makeQuestion, checkAnswer } from '../src/games/greatestCommonDivisorGame';

function* testGenerator(arr) {
  yield arr[0];
  return arr[1];
}

const addTest = testGenerator([12, 52]);

test('greatestCommonDivisorGame makeQuestion test', () => {
  expect(makeQuestion(() => addTest.next().value)).toEqual({ value: '12 52', correctAnswer: '4' });
});

test('greatestCommonDivisorGame checkAnswer test', () => {
  expect(checkAnswer('yee')).toBe(false);
  expect(checkAnswer('27')).toBe(true);
});
