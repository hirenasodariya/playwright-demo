import { test, expect } from '@playwright/test';

function findMissingNumber(arr: number[], n: number): number {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

test('Find missing number', async () => {
  expect(findMissingNumber([1, 2, 4, 5], 5)).toBe(3);
});