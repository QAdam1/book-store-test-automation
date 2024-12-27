import { Locator, Page } from "@playwright/test";
import { BookRow } from "./components/BookRow";
import { PageObject } from "./foundation/PageObject";
import { LocatorsCollection } from "./utils/locatorsCollection";

export class BookStorePage extends PageObject {
    readonly BookElements: Locator;
    BookRows: LocatorsCollection<BookRow>;

    constructor(page: Page) {
        super(page);
        this.BookElements = page.getByRole("row");
        Promise.resolve(this.initBooks());
    }

    async initBooks() {
        const arr_BookRows: BookRow[] = (await this.BookElements.all()).map(
            locator => new BookRow(locator)
        );

        this.BookRows = new LocatorsCollection<BookRow>(Promise.resolve(arr_BookRows));
    }
}
