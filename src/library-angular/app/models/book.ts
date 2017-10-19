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

    constructor(/*id: number,*/ name: string, author: string/*, taker: string, takeDate: string, returnDate: string*/) {
        //this.id = id;
        this.name = name;
        this.author = author;
        //this.taker = taker;
        //this.takeDate = takeDate;
        //this.returnDate = returnDate;
    }
}

