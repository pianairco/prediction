import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  lastSize: SCREEN_SIZE = SCREEN_SIZE.SM;

  constructor() {
    this.resizeSubject = new BehaviorSubject(this.lastSize);
  }

  get onResize$(): Observable<SCREEN_SIZE> {
    return this.resizeSubject.asObservable().pipe();
  }

  private resizeSubject: Subject<SCREEN_SIZE>;

  onResize(size: SCREEN_SIZE) {
    this.lastSize = size;
    this.resizeSubject.next(this.lastSize);
  }

  reSet() {
    this.resizeSubject.next(this.lastSize);
  }
}

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL
}
