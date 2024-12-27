import { test, expect } from "@playwright/test";
import { BookStorePage } from "../../pages/BookStorePage";

test("test", async ({ page }) => {
    let a = new BookStorePage(page);
    a.getBook('name');
});
