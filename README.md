# Nuxt 3 & Playwright

Repo to test out [Nuxt](https://nuxt.com/) with [Playwright](https://playwright.dev/) and [playwright-test-coverage-native](https://github.com/FNNDSC/playwright-test-coverage-native)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Tests

Run playwright with coverage:

```bash
pnpm test:integration
```

Run c8 to generate reports:

```bash
pnpm test:report
```

### Problem

- After running the tests `pnpm test:integration` there is a file within `coverage/tmp` with some results.
- After running the report generation `pnpm test:report` the files for the reports are there, but the coverage is 0% and no files are listed.
- After running the report generation for all files `pnpm test:report:all` some files from node_modules are listed, but not the relevant source files in `pages` and `components` folder
- Using the `coverageSrc` config in `playwright.config.ts` the results in `coverage/tmp` after running `pnpm test:integration` are empty