import { makeQuestion, checkAnswer } from '../src/games/oddGame';

test('oddGame makeQuestion test', () => {
  expect(makeQuestion(() => 34)).toEqual({ value: '34', correctAnswer: 'yes' });
  expect(makeQuestion(() => 69)).toEqual({ value: '69', correctAnswer: 'no' });
});

test('oddGame checkAnswer test', () => {
  expect(checkAnswer('yee')).toBe(false);
  expect(checkAnswer('yes')).toBe(true);
});
