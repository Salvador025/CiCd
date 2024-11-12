import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private counter: number = 0;

  counterObs: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  getCounter(){
    return this.counter;
  }
  increaseCounter(){
    this.counter++;
    this.counterObs.next(this.counter);
  }
}
