import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../types/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  @Input() BooleanSeleccion: boolean = false;

  @Input() Usuario!: User;
  
  @Output() UsuarioSeleccionado = new EventEmitter<User>();
  
  Trigger(){
    this.UsuarioSeleccionado.emit(this.Usuario);
  }

}

