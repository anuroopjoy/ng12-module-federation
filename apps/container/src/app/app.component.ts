import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '@ng12-module-fed/corelib';
import { DynamicLoader } from './dynamic-loader.service';
import { LoaderDirective } from './loader.directive';

@Component({
  selector: 'ng12-module-fed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'container';
  @ViewChild(LoaderDirective) public loaderDirective: LoaderDirective;
  constructor(private sharedService: SharedService,
    private loader: DynamicLoader) {
    this.sharedService.id = 'container';
  }
  ngAfterViewInit(): void {
    this.loader.loadComponent(this.loaderDirective.viewContainerRef);
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // this.loader.loadModule();
  }

}
