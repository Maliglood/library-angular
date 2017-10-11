import { Component } from '@angular/core';
alert("Hello!!!");
@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent {
    name = 'World';
}