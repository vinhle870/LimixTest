import { test } from '@playwright/test';
import { logger } from '../../src/utilities/logger';

test.describe('API Test Suite', () => {
    test('Send POST Request to /v1/profile', async ({ request }) => {
        const apiBaseUrl = process.env.API_BASE_URL;

        logger.info(`Sending POST request to ${apiBaseUrl}/v1/profile`);
        const reqBody = {
            username: 'alice.smith',
            dateOfBirth: '1992-05-20T00:00:00Z',
            gender: 'FEMALE',
            subscribedMarketing: true
        };

        const response = await request.post(`${apiBaseUrl}/v1/profile`, {
            data: reqBody,
        });
        logger.info('POST request Body: ' + JSON.stringify(reqBody));
        logger.info(`Response Status: ${response.status()}`);
        const responseBody = await response.json();
        logger.info(`Response Body: ${JSON.stringify(responseBody)}`);

        // Validate the response
        test.expect(response.status()).toBe(200);
        test.expect(responseBody).toEqual({ userId: 123 });
    });

    test('Send GET Request to /v1/profile/:userId', async ({ request }) => {
        const userId = 123;
        const apiBaseUrl = process.env.API_BASE_URL;
        logger.info(`Sending GET request to ${apiBaseUrl}/v1/profile/${userId}`);


        const response = await request.get(`${apiBaseUrl}/v1/profile/${userId}`);

        logger.info(`Response Status: ${response.status()}`);
        const responseBody = await response.json();
        logger.info(`Response Body: ${JSON.stringify(responseBody)}`);

        // Validate the response
        test.expect(response.status()).toBe(200);
        test.expect(responseBody).toEqual({
            userId: 123,
            username: "johndoe",
            dateOfBirth: "1990-05-01T00:00:00.000Z",
            gender: "MALE",
            subscribedMarketing: true,
            hasSetupPreference: false,
        });
    });
});