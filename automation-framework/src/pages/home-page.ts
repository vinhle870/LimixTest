import { HomePageLocators } from "../locators/home-page-locators";
import { Page, expect, Locator } from '@playwright/test';
import { LocatorHandling } from "../utilities/locator-handling";
import User from "../objects/user";
import { logger } from "../utilities/logger";

export class HomePage {

    page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    public async ValidateRownNotContainsText(expectedText: string) {
        logger.info(`Starting validation to ensure no row contains the text: "${expectedText}"`);

        const tableRows = await this.getTableRows(); // Ensure we get an array of ElementHandles
        expect(tableRows).toBeDefined();
        const rowCount = (await tableRows).length;
        logger.info(`Total number of rows retrieved: ${rowCount}`);
        expect(rowCount).toBeGreaterThan(0);

        const rows = await tableRows;
        for (let row of rows) {
            let rowIndex = tableRows.indexOf(row);
            if (rowIndex !== 0) {
                let rowText = await row.innerText();
                logger.info(`Processing row at index ${rowIndex}: "${rowText}"`);

                if (rowText.includes(expectedText)) {
                    logger.error(`Validation failed! Row at index ${rowIndex} contains the text: "${expectedText}"`);
                    expect(rowText.toLowerCase()).not.toContain(expectedText.toLowerCase());
                } else {
                    logger.info(`Row at index ${rowIndex} passed validation.`);
                }
            }
        }

        logger.info(`Validation completed. No rows contain the text: "${expectedText}"`);
    }

    public async ValidateSalaryColumnNotLessThanExpectedAmount(expectedAmount: number) {
        const tableRows = await this.getTableRows();

        expect(tableRows).toBeDefined();
        logger.info(`Total number of rows retrieved: ${tableRows.length}`);
        expect(tableRows.length).toBeGreaterThan(0);
        for (let row of tableRows) {
            let rowIndex = tableRows.indexOf(row);
            if (rowIndex !== 0) {
            let rowText = await row.innerText();
            logger.info(`Processing row at index ${rowIndex}: "${rowText}"`);
            let rowData = await this.getColumnsOfRow(row);
            if (rowData[2]) {
                let salaryText = (await rowData[2].textContent())?.replace(/[^0-9.]+/g, ''); // Remove non-numeric characters
                let salaryAmount = salaryText ? parseFloat(salaryText) : NaN;
                if(salaryAmount< expectedAmount) {
                    logger.error(`Validation failed! Row at index ${rowIndex} Amount Less Than "${expectedAmount}"`);
                    expect(salaryAmount).toBeGreaterThan(expectedAmount);
                } else {
                    logger.info(`Row at index ${rowIndex} passed validation.`);
                }
            }
        }
    }
}
    public async getTableColumnText(tableRow: Locator, columnIndex: number) {

            if (!tableRow) {
                throw new Error('Row element handle is null.');
            }
            const rowData = await this.getColumnsOfRow(tableRow);
            if (rowData[columnIndex]) {
                return (await rowData[columnIndex].textContent())?.trim(); // Assuming you want the text content of the cell
            }
            throw new Error(`Column index ${columnIndex} does not exist in the row data.`);

      }

    private async getTableRows() {
        const table = await LocatorHandling.getLocator(this.page, HomePageLocators.tbl_WithNoId);
        const rows = await table.locator('tr').all()//
        return rows;
    }

    private async getColumnsOfRow(row: Locator): Promise<Locator[]> {
        const cells = await row.locator('td').all(); // Retrieve an array of Locators
        return cells;

    }





}