import { Directive, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuthState]',
  standalone: true
})
export class AuthStateDirective {

  @Input() appAuthState: boolean | undefined;

  constructor(private authService: AuthService) { 

    console.log('Alguien me invocó', this.appAuthState);
  }

 

}
