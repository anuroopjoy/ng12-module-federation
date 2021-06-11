import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { LoaderDirective } from './loader.directive';

@NgModule({
  declarations: [AppComponent, LoaderDirective],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
