import { Component, OnInit } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';
import { DynamicLoader } from './dynamic-loader.service';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';
  // appDetail = {
  //   path: '/remote/remoteEntry.js',
  //   name: 'remote',
  //   component: 'RemoteComponent',
  //   input: { name: 'Anuroop' },
  //   output: {
  //     emitclick: () => {
  //       console.log('star clicked');
  //     },
  //   },
  // };
  // leftnavDetail = {
  //   path: '/leftnav/leftNav.js',
  //   name: 'leftnav',
  //   component: 'LeftNavComponent',
  // };

  constructor(
    private sharedService: SharedService,
    private loader: DynamicLoader
  ) {
    this.sharedService.id = 'container';
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.loader.loadModule({ module: 'MatSelModule', path: '/select' });
    const link = document.createElement('link');
    link.href = 'http://localhost:8080/remote/styles.css';
    link.rel = 'stylesheet';
    document.body.appendChild(link);
    // setTimeout(() => {
    //   this.loader.loadModule({ module: 'RemoteModule', path: '/search' });
    // }, 10000);
  }
}
