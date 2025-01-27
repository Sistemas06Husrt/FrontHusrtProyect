import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biomedicausernavbar',
  templateUrl: './biomedicausernavbar.component.html',
  styleUrl: './biomedicausernavbar.component.css'
})
export class BiomedicausernavbarComponent {

  constructor(private router: Router){}
  navigateToAbout(){
    localStorage.setItem('utoken', "");
    this.router.navigate(['/login'])
  }
}
