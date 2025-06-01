import { test as base } from '@playwright/test';
import { logger } from '../utilities/logger';
import { HomePage } from '../pages/home-page';
import dotenv from 'dotenv';

// Declare the types of your fixtures.
type MyFixtures = {
    homePage: HomePage;

};

dotenv.config();

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        const { BASE_URL } = process.env;
        if (!BASE_URL) {
            throw new Error('Missing environment variables');
        }
        logger.info('Nagviate to the base URL: ' + BASE_URL);

        await page.goto(BASE_URL);

        await use(new HomePage(page));
    },
});

export { expect } from '@playwright/test';