import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { LoaderDirective } from './loader.directive';

@NgModule({
  declarations: [AppComponent, LoaderDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
