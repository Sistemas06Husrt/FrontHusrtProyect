import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: 'app-biomedicausernavbar',
    templateUrl: './biomedicausernavbar.component.html',
    styleUrl: './biomedicausernavbar.component.css',
    standalone: false
})
export class BiomedicausernavbarComponent {

  constructor(private router: Router){}

  navigateToAbout(){
    localStorage.setItem('utoken', "");
    this.router.navigate(['/login'])
  }

  viewUser(){
    this.router.navigate(['/updateprofil'])
  }

  getDecodedAccessToken(token: string): any {
      try {
        return jwtDecode(token);
      } catch (Error) {
        return null;
      }
    }
}
