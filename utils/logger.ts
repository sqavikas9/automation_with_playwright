import { TestInfo } from '@playwright/test';

export class Logger {
  static info(message: string) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }

  static step(info: TestInfo, message: string) {
    info.annotations.push({ type: 'step', description: message });
    console.log(`[STEP] ${new Date().toISOString()} - ${message}`);
  }
}
