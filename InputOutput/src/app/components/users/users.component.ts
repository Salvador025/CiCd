import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { PageService } from '../../services/page.service';
import { ButtonService } from '../../services/button.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UserDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  UsuarioSeleccionado: User | null = null;

  buttonText: string = 'Botón a Cambiar';
  counter: number = 0;

  ListaDeUsuarios: User[] = [];
  constructor(private userService:UserService, private pageService: PageService, private buttonService: ButtonService) { }
  ngOnInit() { 
    this.userService.getUsers().subscribe((users) => {
      this.ListaDeUsuarios = users;
    });

    this.buttonService.buttonText$.subscribe(text => {
      this.buttonText = text;
    });

    

  }

  GetUserDetails(user: User){
    this.userService.getUser(user.id).subscribe((user) => {
      this.UsuarioSeleccionado = user;
    });
  }

  BorrarUsuario(){
    this.UsuarioSeleccionado = null;
    console.log('Usuario Borrado');
  }


  IncreaseCounter(){
    const resultado = this.pageService.increaseCounter();
  }

  ChangeButton(){
    const newText = this.buttonText === 'Texto 1' ? 'Texto 2' : 'Texto 1';
    this.buttonService.changeButtonText(newText);
  }

}
