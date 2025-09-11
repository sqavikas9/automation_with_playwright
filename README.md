# Automation with Playwright

This project uses [Playwright](https://playwright.dev/) for end-to-end testing with TypeScript.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run tests:**
   ```sh
   npx playwright test
   ```

3. **Debug tests:**
   ```sh
   npx playwright test --debug
   ```

4. **Generate code with Codegen:**
   ```sh
   npx playwright codegen
   ```

## Project Structure

- `src/` - Test files and page objects
- `pages/` - Page Object Model classes
- `utils/CustomKeyword.ts` - Custom wrapper for Playwright actions
- `playwright.config.ts` - Playwright configuration

## Custom Keywords

Use the `CustomKeyword` class in `utils/CustomKeyword.ts` to reuse common Playwright actions in your tests and page objects.

## Reporting

- Multiple reporters are configured in `playwright.config.ts` (HTML, list, dot, etc).
- Allure reporting can be enabled with the `allure-playwright` package.

## Git

- `.gitignore` is set up to exclude Playwright reports, node_modules, and build artifacts.

## Troubleshooting

- If you see script execution errors in PowerShell, run:
  ```sh
  Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
  ```
- For merging unrelated git histories, use:
  ```sh
  git pull origin main --allow-unrelated-histories
  ```

---

Feel free to customize this README for your project needs!
