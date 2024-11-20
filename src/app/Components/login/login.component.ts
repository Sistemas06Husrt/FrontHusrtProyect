import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { UserService } from '../../Services/appServices/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;
  userServices = inject(UserService);
  router = inject(Router);

  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      contraseña: new FormControl()
    });
  }

  async onSubmit() {
    try {
      const response = await this.userServices.login(this.formulario.value);
      if (!response.error) {
          localStorage.setItem('utoken', response.token);
          console.log(this.getDecodedAccessToken(localStorage.getItem('utoken')!));
          if(this.getDecodedAccessToken(localStorage.getItem('utoken')!).rol === 'ADMINSISTEMASA'){
            this.router.navigate(['/adminsistemas']);
          }else if(this.getDecodedAccessToken(localStorage.getItem('utoken')!).rol === 'SUPERADMIN'){
            this.router.navigate(['/superadmin']);
          }
        }
    } catch {
      Swal.fire({
        icon: 'warning',
        title: 'Usuario o contraseña incorecto',
        text: 'Verifique los campos. si no cuenta con un usuario registrese.'
      })
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }

}