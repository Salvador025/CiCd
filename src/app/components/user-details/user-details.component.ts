import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {


  @Input() Usuario!: User;

  @Output() BorrarUsuario = new EventEmitter<void>();

  EraseUser(){
    console.log('Borrando Usuario');
    this.BorrarUsuario.emit();
  }

}
