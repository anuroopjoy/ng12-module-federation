import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeftNavComponent } from './app.component';

@NgModule({
  declarations: [LeftNavComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [LeftNavComponent],
})
export class AppModule { }
