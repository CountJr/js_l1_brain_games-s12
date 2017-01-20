
import { makeQuestion, checkAnswer } from '../src/games/progressionGame';

function* testGenerator(arr) {
  yield arr[0];
  yield arr[1];
  return arr[2];
}

const addTest = testGenerator([12, 4, 3]);

test('progressionGame makeQuestion test', () => {
  expect(makeQuestion(() => addTest.next().value)).toEqual({
    value: '12 16 20 .. 28 32 36 40 44 48',
    correctAnswer: '24' });
});

test('progressionGame checkAnswer test', () => {
  expect(checkAnswer('yee')).toBe(false);
  expect(checkAnswer('27')).toBe(true);
});
