import { Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { DynamicLoader } from './dynamic-loader.service';

@Directive({
  selector: '[ng12ModuleFedLoader]'
})
export class LoaderDirective implements OnChanges {

  @Input() public ng12ModuleFedLoader: { path: string; name: string; component: string; remoteComponent: string;
    input?: Record<string,string>,
    output?: Record<string, any>};
  constructor(private viewContainerRef: ViewContainerRef, private loader: DynamicLoader) { }
  ngOnChanges(): void {
    this.loader.loadComponent(this.viewContainerRef, this.ng12ModuleFedLoader);
  }

}
