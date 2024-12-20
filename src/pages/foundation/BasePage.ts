import { Locator, Page } from "@playwright/test";
import { PageObject } from "./PageObject";

export class BasePage extends PageObject {
    readonly input_Search: Locator;
    readonly txt_LoggedInUsername: Locator;
    readonly btn_LogOut: Locator;

    constructor(page: Page) {
        super(page);
        this.input_Search = page.getByPlaceholder("Type to search");
        this.txt_LoggedInUsername = page.locator("#userName-value");
        this.btn_LogOut = page.getByRole("button", { name: "Log out" });
    }

    async getLoggedInUsername() {
        return await this.txt_LoggedInUsername.textContent();
    }

    async search(searchValue: string) {
        await this.input_Search.fill(searchValue);
    }

    async clickLogOut() {
        await this.btn_LogOut.click();
    }
}
