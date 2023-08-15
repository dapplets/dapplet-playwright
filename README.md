# @dapplets/dapplet-playwright Library

The `@dapplets/dapplet-playwright` library is a collection of fixtures designed for testing dapplets within the Dapplet Extension environment. It automates the process of downloading the specified version of the extension and provides utilities for testing.

## Installation

You can install the library using npm:

```bash
npm i -D @dapplets/dapplet-playwright
```

## Configuration

To use the `@dapplets/dapplet-playwright` library, you need to configure the `playwright.config.ts` file in your project. This file specifies various settings for testing, including browser configuration and extension version. An example configuration for Chromium is as follows:

```typescript
import { defineConfig } from 'playwright';
import { devices } from 'playwright-chromium';
  
export default defineConfig({
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        newHeadless: process.env.CI ? true : false,
        extensionVersion: "v0.60.0-alpha.2",
      },
    }
  ],
});
```

Adjust the configuration according to your requirements, including the browser you want to use and the extension version you want to test with.

## Usage

Here's an example of how you can use the `@dapplets/dapplet-playwright` library to test your dapplet:

```typescript
import { expect, test } from "@dapplets/dapplet-playwright";

test("should inject widget", async ({
  page,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto('https://example.com');

  await enableDevServer("http://localhost:3001/dapplet.json");
  await activateDapplet("your-dapplet-id", "http://localhost:3001/dapplet.json");

  await expect(page.locator('.dapplet-widget')).toBeVisible();
});
```

In this example, the `expect`, `test`, `enableDevServer`, and `activateDapplet` functions are provided by the library, making it easy to write tests for your dapplets.

## Contributing

Contributions to the `@dapplets/dapplet-playwright` library are welcome! If you find any issues or have improvements to suggest, please open an issue or submit a pull request on the [GitHub repository](https://github.com/dapplets/dapplet-playwright).

## License

This project is licensed under the [MIT License](https://github.com/dapplets/dapplet-playwright/blob/master/LICENSE).
