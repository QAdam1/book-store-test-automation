import { Dialog, expect, Locator, Page } from "@playwright/test";
import { PageObject } from "./foundation/PageObject";
import { Captcha } from "./components/captcha";

export class RegisterPage extends PageObject {
    // Definition
    readonly input_firstName: Locator;
    readonly input_LastName: Locator;
    readonly input_Username: Locator;
    readonly input_Password: Locator;
    readonly captcha: Captcha;
    readonly btn_Register: Locator;
    readonly btn_BackToLogin: Locator;
    readonly txt_ErrMsgCaptcha: Locator;
    readonly txt_ErrMsgPasswordRules: Locator;

    constructor(page: Page) {
        super(page);
        this.input_firstName = page.getByPlaceholder("First Name");
        this.input_LastName = page.getByPlaceholder("Last Name");
        this.input_Username = page.getByPlaceholder("UserName");
        this.input_Password = page.getByPlaceholder("Password");
        this.captcha = new Captcha(this.page);
        this.btn_Register = page.getByRole("button", { name: "Register" });
        this.btn_BackToLogin = page.getByRole("button", {
            name: "Back to Login",
        });
        this.txt_ErrMsgCaptcha = page.getByText("Please verify reCaptcha");
        this.txt_ErrMsgPasswordRules = page.getByText("Passwords must have");
    }

    // Methods
    async enterFirstName(firstName: string) {
        await this.input_firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.input_LastName.fill(lastName);
    }

    async enterUsername(username: string) {
        await this.input_Username.fill(username);
    }

    async enterPassword(password: string) {
        await this.input_Password.fill(password);
    }

    async clickRegister(expectSuccess: boolean) {
        if (expectSuccess) {
            this.page.on("dialog", async (dialog) => {
                expect(dialog.message).toBe("User Register Successfully.");
                await dialog.accept();
            });
        }

        await this.btn_Register.click();
    }

    async clickBackToLogin() {
        await this.btn_BackToLogin.click();
    }

    // Validations
    async validateErrMsgCaptcha() {
        await expect(this.txt_ErrMsgCaptcha).toBeVisible();
    }

    async validateErrMsgPasswordRules() {
        await expect(this.txt_ErrMsgPasswordRules).toBeVisible();
    }
}
