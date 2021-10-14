import { Component, OnInit } from '@angular/core';
import { SharedService, LoaderService } from '@ng12-module-fed/corelib';
import { DynamicLoader } from './dynamic-loader.service';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'container';
  appDetail = {
    path: '/remote/remoteEntry.js',
    name: 'remote',
    component: 'RemoteComponent',
    input: { name: 'Anuroop' },
    output: {
      emitclick: () => {
        console.log('star clicked');
      },
    },
  };
  // leftnavDetail = {
  //   path: '/leftnav/leftNav.js',
  //   name: 'leftnav',
  //   component: 'LeftNavComponent',
  // };
  showLoader = false;

  constructor(
    private sharedService: SharedService,
    private appLoader: DynamicLoader,
    private loaderService: LoaderService
  ) {
    this.sharedService.id = 'container';
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  async ngOnInit() {
    this.loaderService.loader.subscribe((val) => {
      this.showLoader = val;
    });
    this.loaderService.showLoader(true);
    await this.appLoader.loadModule({
      module: 'RemoteAnimateModule',
      path: '/animate',
    });
    this.loaderService.showLoader(false);
    setTimeout(async () => {
      this.loaderService.showLoader(true);
      await this.appLoader.loadModule({
        module: 'RemoteModule',
        path: '/search',
      });
      this.loaderService.showLoader(false);
    }, 10000);
  }
}
