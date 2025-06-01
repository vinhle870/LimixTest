import { test } from '../../src/fixtures/basetest-fixtures';
import { logger } from '../../src/utilities/logger';

test.describe('Test Suites #1', () => {
    test('Validate No Manual Work in Table No ID', async ({ homePage }) => {
        logger.info('Verify Row does not contain Manual in the table');
        await homePage.ValidateRownNotContainsText("Manual");
    });

    test('Validate Salary is not Less than 100,000 USD', async ({ homePage }) => {
        logger.info('Verify Salary column does not contain values less than 100,000 USD');
        await homePage.ValidateSalaryColumnNotLessThanExpectedAmount(100000);

    });

  });