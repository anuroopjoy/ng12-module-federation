import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader$ = new Subject<boolean>();
  public loader = this.loader$.asObservable();

  public showLoader(show: boolean) {
    this.loader$.next(show);
  }
}
