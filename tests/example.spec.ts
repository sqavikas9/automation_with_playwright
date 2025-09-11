import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Logger } from '../utils/logger';

test('should log in successfully', async ({ page }, testInfo) => {
  const loginPage = new LoginPage(page);

  Logger.step(testInfo, 'Starting test case for login');

  await loginPage.navigate();

  Logger.step(testInfo, 'Performing login action');
  await loginPage.login('testuser', 'password123');

  Logger.step(testInfo, 'Verifying successful login');
  await expect(page).toHaveURL(/dashboard/);
});
