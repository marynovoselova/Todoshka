import { getDeclinedForm } from '@shared/lib/getDeclinedForm';

describe('getDeclinedForm', () => {
  const forms: [string, string, string] = ['задача', 'задачи', 'задач'];

  const testCases = [
    { count: 1, expected: 'задача' },
    { count: 2, expected: 'задачи' },
    { count: 3, expected: 'задачи' },
    { count: 4, expected: 'задачи' },
    { count: 5, expected: 'задач' },
    { count: 11, expected: 'задач' },
    { count: 19, expected: 'задач' },
    { count: 21, expected: 'задача' },
    { count: 22, expected: 'задачи' },
    { count: 23, expected: 'задачи' },
    { count: 24, expected: 'задачи' },
    { count: 10, expected: 'задач' },
    { count: 20, expected: 'задач' },
    { count: 100, expected: 'задач' },
  ];

  testCases.forEach(({ count, expected }) => {
    it(`should return "${expected}" for count ${count}`, () => {
      expect(getDeclinedForm(count, forms)).toBe(expected);
    });
  });
});
