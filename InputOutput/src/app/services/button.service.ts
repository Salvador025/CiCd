import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private buttonTextSource = new Subject<string>();
  buttonText$ = this.buttonTextSource.asObservable();

  changeButtonText(text: string) {
    this.buttonTextSource.next(text);
  }
}
