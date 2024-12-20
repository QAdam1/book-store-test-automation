import { Locator, Page } from "@playwright/test";
import { PageObject } from "../foundation/PageObject";

export class Captcha extends PageObject {
  readonly cbox_NotARobot: Locator;

  constructor(page: Page) {
    super(page);
    this.cbox_NotARobot = page.getByTitle("reCAPTCHA").getByRole("checkbox");
  }

  async checkCaptcha() {
    await this.cbox_NotARobot.check();
  }
}
