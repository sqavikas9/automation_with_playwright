import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { config } from '../utils/config';

const users = [
  { username: config.username, password: config.password, expectedUrl: /dashboard/ },
  { username: 'wronguser', password: 'wrongpass', expectedUrl: /login/ }
];

for (const user of users) {
  test(`login test for ${user.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(user.username, user.password);
    await expect(page).toHaveURL(user.expectedUrl);
  });
}
