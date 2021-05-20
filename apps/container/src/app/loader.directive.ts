import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ng12ModuleFedLoader]'
})
export class LoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
