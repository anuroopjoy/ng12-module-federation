import { Component } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';
import logo from '../../assets/nx-logo-white.svg';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'remote-app',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent {
  title = 'remote';
  logo = logo;
  constructor(private sharedService: SharedService) {
    this.sharedService.id = 'remote';
  }
}
