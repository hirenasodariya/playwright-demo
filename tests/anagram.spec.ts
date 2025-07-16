import { test, expect } from '@playwright/test';

function isAnagram(str1: string, str2: string): boolean {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

test('Check if strings are anagrams', async () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
  expect(isAnagram('hello', 'world')).toBe(false);
});