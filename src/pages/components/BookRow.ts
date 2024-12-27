import { Locator, Page } from "@playwright/test";
import { PageObject } from "../foundation/PageObject";
import { BaseComponent } from "./foundation/BaseComponent";

export class BookRow extends BaseComponent {
  readonly image: Locator;
  readonly btn_txt_Title: Locator;
  readonly txt_Author: Locator;
  readonly txt_Publisher: Locator;

  constructor(bookRow: Locator) {
    super(bookRow);
    this.image = bookRow.getByAltText("image");
    this.btn_txt_Title = bookRow.locator(".action-buttons").locator("a");
    this.txt_Author = bookRow.locator('[role="gridcell"]:nth-child(3)'); //todo if problems -> use xpath
    this.txt_Publisher = bookRow.locator('[role="gridcell"]:nth-child(4)'); //todo if problems -> use xpath
  }

  async getImageHref() {
    return await this.image.getAttribute("href");
  }

  async getTitle() {
    return await this.btn_txt_Title.textContent();
  }

  async getAuthor() {
    return await this.txt_Author.textContent();
  }

  async getPublisher() {
    return await this.txt_Publisher.textContent();
  }

  async clickBook() {
    await this.btn_txt_Title.click();
  }
}
