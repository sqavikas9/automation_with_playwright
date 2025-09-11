import { test } from '@playwright/test';

test('login via API and use session', async ({ request, page }) => {
  const response = await request.post('https://example.com/api/login', {
    data: { username: 'testuser', password: 'password123' }
  });

  const { token } = await response.json();

  await page.addInitScript(value => {
    localStorage.setItem('authToken', value);
  }, token);

  await page.goto('https://example.com/dashboard');
});
