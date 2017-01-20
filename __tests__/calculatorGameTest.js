import { makeQuestion, checkAnswer } from '../src/games/calculatorGame';

function* testGenerator(arr) {
  yield arr[0];
  yield arr[1];
  return arr[2];
}

const addTest = testGenerator([12, 53, 1]);
const divTest = testGenerator([45, 83, 2]);
const mulTest = testGenerator([43, 61, 3]);

test('calculatorGame makeQuestion test', () => {
  expect(makeQuestion(() => addTest.next().value)).toEqual({ value: '12 + 53', correctAnswer: '65' });
  expect(makeQuestion(() => divTest.next().value)).toEqual({ value: '45 - 83', correctAnswer: '-38' });
  expect(makeQuestion(() => mulTest.next().value)).toEqual({ value: '43 * 61', correctAnswer: '2623' });
});

test('calculatorGame checkAnswer test', () => {
  expect(checkAnswer('yee')).toBe(false);
  expect(checkAnswer('27')).toBe(true);
});
