import { test } from '../../src/fixtures/basetest-fixtures';
import { logger } from '../../src/utilities/logger';

test.describe('Test Suites #1', () => {
    test('TC_3.1: Validate No Manual Work in Table No ID', async ({ homePage }) => {
        logger.info('Verify Row does not contain Manual in the table');
        await homePage.ValidateRownNotContainsText("Manual");
    });

    test('TC_2.1: Validate Salary is not Less than 100,000 USD', async ({ homePage }) => {
        logger.info('Verify Salary column does not contain values less than 100,000 USD');
        await homePage.ValidateSalaryColumnNotLessThanExpectedAmount(100000);

    });

  });