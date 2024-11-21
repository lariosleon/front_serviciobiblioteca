import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeLogin: string = '';

  loginForm!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router : Router
  ) {

    if(localStorage.getItem('token')){
      this.router.navigate(['/app/prestamoslibros']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    
    this.loginService.login(username, password)
      .subscribe(
        response => {
          console.log('Inicio de sesión exitoso', response);
          const { code, data } = response;

          console.log(code, data, response.data);

          switch (response.code) {
            case 0:
              this.mensajeLogin = response.data;
              alert('Error en Usuario y/o Contraseña');
              break;
            case 403:
              this.mensajeLogin = response.data;
              alert('Error de inicio de sesion '+ this.mensajeLogin);
              break;
            case 200:
              this.mensajeLogin = response.data;
              this.router.navigate(['/app/prestamoslibros']);
              console.log("se r")
              break;
            case 401:
              this.mensajeLogin = response.data;
              alert('Error de inicio de sesion '+ this.mensajeLogin);
              break;
            case 400:
              this.mensajeLogin = response.data;
              alert('Error de inicio de sesion '+ this.mensajeLogin);
              break;
            case 500:
              this.mensajeLogin = response.data;
              alert('Error de inicio de sesion '+ this.mensajeLogin);
              break;
            default:
              alert('Error de inicio de sesion');
              console.log('Error en inicio de sesión');
              break;
          }


        },
        error => {
          console.error('Error en inicio de sesión', error);
          if (error instanceof HttpErrorResponse) {
            console.error('Estado:', error.status);
            console.error('Texto:', error.statusText);
            // Muestra el mensaje de error al usuario
            alert(error.error);
          }
        }
      );



  }

}
