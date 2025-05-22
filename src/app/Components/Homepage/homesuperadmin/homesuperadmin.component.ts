import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-homesuperadmin',
    templateUrl: './homesuperadmin.component.html',
    styleUrl: './homesuperadmin.component.css',
    standalone: false
})
export class HomesuperadminComponent {

  constructor(
    private router: Router
  ){}

  showRegisterForm(){
    this.router.navigate(['/registro']);
  }
  showViewUsers(){
    this.router.navigate(['/admusuarios']);
  }
}
