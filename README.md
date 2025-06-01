# Playwright Automation Framework Documentation

## Overview
This framework is designed for automated testing of APIs and UIs, with support for mock servers and CICD integration. It leverages modern tools and libraries to ensure scalability, maintainability, and ease of use.

---

## Structure of Framework
The framework is organized as follows:
- **src/**: Contains the core source code for the framework, including utilities, fixtures, and page objects.
- **tests/**: Includes test cases for API and UI testing.
- **mocks/**: Contains mock server configurations and data.
- **config/**: Holds configuration files for local and CICD environments.
- **docs/**: Documentation and guides related to the framework.

---

## Used Language
- **TypeScript**: The framework is written in TypeScript for type safety and modern JavaScript features.

---

## Applied Testing Types
### UI Testing
- **Playwright**: Used for browser automation and UI testing.

### API Testing
- **Playwright**: Used for REST API testing with built-in request handling.

---

## Supported Libraries
### Mock Server
- **Express.js**: Used for creating and managing mock servers.
- **Winston**: Used for logging server activity.

---

## Logger Setup
The framework uses **Winston** for logging. Logs are generated for both console output and file storage.

### Logger Configuration
The logger is configured in `src/utilities/logger.ts`:
```typescript
import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/test.log' }),
    ],
});
```

### Log Output
- **Console Logs:** Displayed in the terminal during test execution.
- **File Logs:** Stored in `logs/test.log` for debugging and analysis.

---

## Modes of Execution

### Run Locally
1. Ensure all dependencies are installed:
    ```bash
    npm install
    ```
2. Start the mock server:
    ```bash
    npx tsx ./src/mock-server/server.ts
    ```
3. Execute the tests:
    - **Run API Tests**:
        ```bash
        npx playwright test ./tests/api
        ```
    - **Run UI Tests**:
        ```bash
        npx playwright test ./tests/ui
        ```

### Run via CICD
1. Configure the pipeline in your CICD tool (e.g. GitHub Actions).
2. Ensure the environment variables are set correctly in the pipeline configuration.
3. Trigger the pipeline to execute tests automatically using:
    ```bash
    npx playwright test
    ```

---

## Troubleshooting

### Common Issues
1. **Mock Server Not Starting:**
    - Ensure `ts-node` is installed.
    - Verify the server entry point (`server.ts`) is correct.

2. **Tests Failing:**
    - Check the logs for detailed error messages.
    - Ensure the mock server is running and accessible.

---

## License
This framework is licensed under the ISC License. See `LICENSE` for more details.
