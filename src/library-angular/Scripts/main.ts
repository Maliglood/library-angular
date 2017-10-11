import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import App = require("./app");
import AppModule = App.AppModule;
const platform = platformBrowserDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };

if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}