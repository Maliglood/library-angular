import { Component } from '@angular/core';
import { Book } from '../models/book'

@Component({
    selector: 'books-list',
    templateUrl: '../templates/books.list.template.html'
})

export class BooksComponent {
    books: Book[] = [
        { id: 1, name: "CLR via C# (.NET Framework 4.5)", author: "Джеффри Рихтер", taker: "Заздравных Василий", takeDate: "", returnDate: "09.10.2017" },
        { id: 2, name: "Совершенный код", author: " Стив Макконнелл", taker: "", takeDate: "", returnDate: "" },
        { id: 3, name: "Приёмы ООП, Паттерны проектирования", author: "Эрих Гамма, Ричард Хелм, Ральф Джонсон, Джон Влиссидес", taker: "Щемель Павел", takeDate: "", returnDate: "23.06.2017" },
        { id: 5, name: "Чистый код. Создание, анализ и рефакторинг", author: "Роберт Мартин", taker: "Захаров Андрей", takeDate: "", returnDate: "25.12.2017" },
        { id: 4, name: "Как пасти котов, Наставление для программистов, руководящих другими программистами", author: "Дж. Ханк Рейнвотер", taker: "Кристина", takeDate: "", returnDate: "" },
        { id: 6, name: "JavaScript: сильные стороны", author: "", taker: "", takeDate: "Дуглас Крокфорд", returnDate: "" }
    ];

    public ngOnInit() {
        
    }

    add(name: string, author: string): void {
        this.books.push(new Book(name, author));
    }
}