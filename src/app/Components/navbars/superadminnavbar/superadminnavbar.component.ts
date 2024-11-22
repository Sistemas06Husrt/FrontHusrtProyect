import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-superadminnavbar',
  templateUrl: './superadminnavbar.component.html',
  styleUrl: './superadminnavbar.component.css'
})
export class SuperadminnavbarComponent {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  constructor(private router: Router){}
  navigateToAbout(){
    localStorage.setItem('utoken', "");
    this.router.navigate(['/login'])
  }
}
