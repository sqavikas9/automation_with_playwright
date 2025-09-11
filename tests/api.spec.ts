import { test, expect } from '@playwright/test';

test('get user profile', async ({ request }) => {
  const response = await request.get('https://example.com/api/profile');
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.username).toBe('testuser');
});
