import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';
import logo from '../../assets/nx-logo-white.svg';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'remote-app',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss'],
})
export class RemoteComponent {
  @Input() name: string;
  @Output() emitclick = new EventEmitter();
  title = 'remote';
  logo = logo;
  constructor(private sharedService: SharedService) {
    this.sharedService.id = 'remote';
  }

  handleClick() {
    this.emitclick.emit();
  }
}
