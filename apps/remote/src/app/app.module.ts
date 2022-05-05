import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoteAnimateModule } from './remote-animate/remote-animate.module';
import { RemoteModule } from './remote/remote.module';
import { MatSelModule } from './mat-sel/mat-sel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RemoteModule, RemoteAnimateModule, MatSelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
