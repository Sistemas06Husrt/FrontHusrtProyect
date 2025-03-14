import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clasificacion-inventario',
  templateUrl: './clasificacion-inventario.component.html',
  styleUrl: './clasificacion-inventario.component.css'
})
export class ClasificacionInventarioComponent {

  constructor (private router: Router){
  }

  showViewTiposEquipoBio(){
    this.router.navigate(['/biomedica/tiposequipo']);
  }
}
