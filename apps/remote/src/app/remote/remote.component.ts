import { Component } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'remote-app',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent {
  title = 'remote';
  constructor(private sharedService: SharedService) {
    this.sharedService.id = 'remote';
  }
}
