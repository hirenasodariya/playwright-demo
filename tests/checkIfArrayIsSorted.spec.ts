import { test, expect } from '@playwright/test';

function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) 
    return false;
  }
  return true;
}

test('Array is sorted', async () => {
  expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
  expect(isSorted([5, 3, 1])).toBe(false);
});