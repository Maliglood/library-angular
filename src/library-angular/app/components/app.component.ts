﻿import { Component, OnInit, NgModule } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: '../templates/app.template.html'
})

export class AppComponent implements OnInit {
    ngOnInit(): void { console.log("Not implemented"); }
    testHtml = '<p>Hello world</p>';
    constructor() { }
}