import { UserService } from './../../Services/appServices/userServices/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css',
  providers: [MessageService]
})

export class GestionUsuariosComponent {

  usuarios!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  userService = inject(UserService);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}


  async ngOnInit() {
    try {
      this.usuarios = await this.userService.getAllUsers();
      this.loading = false;

      console.log(this.usuarios);

    } catch {
      Swal.fire({
        icon: 'warning',
        title: 'Inconsistencia en los datos',
        text: 'No fue posible Cargar la informacion '
      })
    }
  }

  showRegisterForm(){
    this.router.navigate(['/registro']);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }


}
