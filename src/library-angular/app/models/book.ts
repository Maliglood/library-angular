/**
 * Экземпляр книги.
 */
export class Book {
    id: number;
    name: string;
    author: string;
    taker: string;
    takeDate: string;
    returnDate: string;

    constructor(/*id: number,*/ name: string, author: string/*, taker: string, takeDate: string*/, returnDate: string) {
        const date = new Date();

        //this.id = id;
        this.name = name;
        this.author = author;
        //this.taker = taker;
        this.takeDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
        this.returnDate = returnDate;
    }
}

