import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { AppComponent } from "./components/app.component";

import { BooksComponent } from './components/books.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: BooksComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        BooksComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }