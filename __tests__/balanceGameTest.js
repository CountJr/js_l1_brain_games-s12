import { makeQuestion, checkAnswer } from '../src/games/balanceGame';

test('oddGame makeQuestion test', () => {
  expect(makeQuestion(() => 5934)).toEqual({ value: '5934', correctAnswer: '5556' });
  expect(makeQuestion(() => 1234)).toEqual({ value: '1234', correctAnswer: '2233' });
});

test('oddGame checkAnswer test', () => {
  expect(checkAnswer('yee')).toBe(false);
  expect(checkAnswer('27')).toBe(true);
});
