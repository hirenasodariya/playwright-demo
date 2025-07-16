import { test, expect } from '@playwright/test';

function fibonacci(n: number): number[] {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

test('Fibonacci series', async () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});