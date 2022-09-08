import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "admin";

  password: string = "";

  constructor(private rest: ApiRestService, private router: Router, private msg: ToastrService) { 

  }

  //Iniciar sesión
  public logIn(): void {
    this.rest.login(this.username, this.password).subscribe(
      response => {
        this.rest.setUser(response.user);
        this.router.navigate(["/home"]); 
        this.msg.success("Bienvenido"); 
      }, error => {
        this.msg.error("jeje"); 
      }
    )
  }

}
