# MyTheresa Playwright Project

This project is a Playwright-based test automation framework for testing the MyTheresa website. It includes page object models, test cases, and configuration files to facilitate end-to-end testing.

## Project Structure

- **config.json / config.ts**: Configuration files for the project.
- **Jenkinsfile**: CI/CD pipeline configuration for Jenkins.
- **package.json**: Node.js dependencies and scripts.
- **playwright.config.ts**: Playwright configuration file.
- **playwright-report/**: Contains test execution reports.
- **resources/**: Additional resources for the project.
- **test-results/**: Stores test artifacts like traces and screenshots.
- **tests/**: Contains test case files.
  - `test-case1.test.ts`, `test-case2.test.ts`, etc.
- **poms/**: Page Object Models for the application.
  - `fashionhub-page-object/`: Contains page object files like `00-home-page.ts`, `01.1-account-page.ts`, etc.

## Prerequisites

- Node.js (v16 or later)
- Playwright (installed via npm)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd MyTheresa
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

To execute all tests, run:
```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test tests/<test-file-name>
```

## Generating Reports

After running tests, view the Playwright report:
```bash
npx playwright show-report
```

## Debugging Tests

Run tests in debug mode:
```bash
npx playwright test --debug
```

## Tests

The `tests/` directory contains automated test cases written using Playwright. These tests are designed to validate the functionality of the MyTheresa website. Each test file corresponds to a specific feature or functionality being tested.

### Test Structure

- **test-case1.test.ts**: Verifies the homepage functionality.
- **test-case2.test.ts**: Validates HTTP response statuses for various scenarios.
- **test-case3.test.ts**: Tests user login functionality.

### Running Tests

To execute all tests, use the following command:
```bash
npx playwright test
```

To run a specific test file, specify its path:
```bash
npx playwright test tests/<test-file-name>
```

### Debugging Tests

For debugging purposes, you can run tests in debug mode:
```bash
npx playwright test --debug
```

This mode provides detailed logs and an interactive browser session to help identify issues.

## CI/CD Integration

This project includes a `Jenkinsfile` for integration with Jenkins. Configure your Jenkins pipeline to use this file for automated test execution.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
