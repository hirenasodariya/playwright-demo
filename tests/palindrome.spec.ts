import { test, expect } from '@playwright/test';

// Function to check if number is palindrome
function isPalindromeNumber(num: number): boolean {
  const original = num.toString();
  const reversed = original.split('').reverse().join('');
  return original === reversed;
}

// Playwright test
test('Check if number is palindrome', async () => {
  const testCases = [
    { input: 121, expected: true },
    { input: 12321, expected: true },
    { input: 123, expected: false },
    { input: 4004, expected: true },
    { input: 100, expected: false },
  ];

  for (const { input, expected } of testCases) {
    const result = isPalindromeNumber(input);
    if (result) {
      console.log(`${input}`+ " number is plaindrome")
    } else {
      console.log(`${input}`+ " number is not plaindrome")
    }
    expect(result).toBe(expected);
  }
});