import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

const platform = platformBrowserDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };

if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}