// CustomKeyword.ts
// A utility class to wrap common Playwright actions for reuse in tests and page objects.
import { Page, Locator } from '@playwright/test';

export class CustomKeyword {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }


  private getLocator(selector: string | Locator): Locator {
    return typeof selector === 'string' ? this.page.locator(selector) : selector;
  }

  async click(selector: string | Locator) {
    await this.getLocator(selector).click();
  }

  async fill(selector: string | Locator, value: string) {
    await this.getLocator(selector).fill(value);
  }

  async type(selector: string | Locator, value: string) {
    await this.getLocator(selector).type(value);
  }

  async getText(selector: string | Locator): Promise<string> {
    return await this.getLocator(selector).innerText();
  }

  async isVisible(selector: string | Locator): Promise<boolean> {
    return await this.getLocator(selector).isVisible();
  }

  async waitForSelector(selector: string | Locator, timeout = 5000) {
    await this.getLocator(selector).waitFor({ timeout });
  }

  async press(selector: string | Locator, key: string) {
    await this.getLocator(selector).press(key);
  }

  async check(selector: string | Locator) {
    await this.getLocator(selector).check();
  }

  async uncheck(selector: string | Locator) {
    await this.getLocator(selector).uncheck();
  }

  async selectOption(selector: string | Locator, value: string) {
    await this.getLocator(selector).selectOption(value);
  }

  // Add more custom actions as needed
}
