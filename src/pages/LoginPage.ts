import { Locator, Page } from "@playwright/test";
import { PageObject } from "./foundation/PageObject";

export class LoginPage extends PageObject {
    readonly input_Username: Locator;
    readonly input_Password: Locator;
    readonly btn_Login: Locator;
    readonly btn_NewUser: Locator;

    constructor(page: Page) {
        super(page);
        this.input_Username = page.getByPlaceholder("UserName");
        this.input_Password = page.getByPlaceholder("Password");
        this.btn_Login = page.getByRole("button", { name: "Login" });
        this.btn_NewUser = page.getByRole("button", { name: "NewUser" });
    }

    async enterUsername(username: string) {
        await this.input_Username.fill(username);
    }

    async enterPassword(password: string) {
        await this.input_Password.fill(password);
    }

    async clickLogin() {
        await this.btn_Login.click();
    }

    async clickNewUser() {
        await this.btn_NewUser.click();
    }
}
