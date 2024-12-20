import { Page } from "@playwright/test";

export class PageObject {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
