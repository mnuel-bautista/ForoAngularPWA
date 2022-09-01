import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: string = "admin"; 

  password: string = ""; 

  constructor() {}

  //Iniciar sesión
  public logIn(): void {
    alert(`Funciona: Nombre de usuario: ${this.user}; Constraseña: ${this.password}`); 
  }

}
