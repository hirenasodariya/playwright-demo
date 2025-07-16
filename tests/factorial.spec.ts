import { test, expect } from '@playwright/test';

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

test('Factorial of a number', async () => {
  expect(factorial(5)).toBe(120);
});