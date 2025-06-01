import { Locator, Page } from "@playwright/test";

export class LocatorHandling {
    /**
* Find and return the UI Field's locator
* @param selector
* @returns Locator
*/
    static getLocator(page:Page, selector: string): Locator {
        return page.locator(selector);
    }
}