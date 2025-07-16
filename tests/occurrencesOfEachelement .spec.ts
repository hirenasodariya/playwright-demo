import { test, expect } from '@playwright/test';

function countOccurrences(arr: number[]): Record<number, number> {
  const counts: Record<number, number> = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}

test('Count occurrences', async () => {
  const input = [1, 2, 2, 3, 3, 3];
  expect(countOccurrences(input)).toEqual({ 1: 1, 2: 2, 3: 3 });
});