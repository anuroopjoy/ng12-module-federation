import { Component } from '@angular/core';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class LeftNavComponent {
  title = 'leftnav';
  styleExp = '0px';

  public openNav() {
    this.styleExp = "250px";
  }

  public closeNav() {
    this.styleExp = "0px";
  }
}
