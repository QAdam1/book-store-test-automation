import { Locator } from "@playwright/test";
import { BaseComponent } from "../components/foundation/BaseComponent";

export class LocatorsCollection<T extends BaseComponent> extends Array<T>{
    // constructor(private arr_Objects: Promise<T[]>) {
    //     super();
    // }

    constructor(private arr_Objects: Locator) {
        super();

        const arr_BookRows = (Promise.resolve(this.arr_Objects.all())).then(arr=>arr.map(
            locator => new T(locator))
        );

        // this.BookRows = new LocatorsCollection<BookRow>(Promise.resolve(arr_BookRows));
    

    }

    public async getByIndex(index: number) {
        return await this.arr_Objects[index];
    }

    public async getByFilter(predicate: (item: T) => Promise<boolean>) {
        await (this.arr_Objects).then(arr => arr.filter(predicate));
        await (this.arr_Objects).then(arr => arr.filter(predicate));
    }
}
