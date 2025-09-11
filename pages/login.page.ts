import { Page } from '@playwright/test';
import { Logger } from '../utils/logger';   

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = 'input[name="username"]';
  readonly passwordInput = 'input[name="password"]';
  readonly loginButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    Logger.info('Navigating to login page');
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    Logger.info('Filling username');
    await this.page.fill(this.usernameInput, username);

    Logger.info('Filling password');
    await this.page.fill(this.passwordInput, password);

    Logger.info('Clicking login button');
    await this.page.click(this.loginButton);
  }
}
