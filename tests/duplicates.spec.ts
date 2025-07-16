import { test, expect } from '@playwright/test';

// Function to find duplicate numbers in an array
function findDuplicates(arr: number[]): number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

// Playwright test
test('Find duplicate numbers in array', async () => {
  const input = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];
  const expectedDuplicates = [1, 2, 5];

  const result = findDuplicates(input);
  console.log("Duplicate numbers: "+result);
  // Sort to ensure consistent comparison
  expect(result.sort()).toEqual(expectedDuplicates.sort());
});