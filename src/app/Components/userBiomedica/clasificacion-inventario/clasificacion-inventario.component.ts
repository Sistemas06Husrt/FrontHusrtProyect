import { Component, inject, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EquiposService } from '../../../Services/appServices/biomedicaServices/equipos/equipos.service';

@Component({
  selector: 'app-clasificacion-inventario',
  templateUrl: './clasificacion-inventario.component.html',
  styleUrl: './clasificacion-inventario.component.css'
})
export class ClasificacionInventarioComponent implements OnInit{

  equipos! : any[];
  equipoServices = inject(EquiposService);
  equipoSeleccionado: string = '';


  constructor (private router: Router){
  }



  async ngOnInit() {
      this.equipos = await this.equipoServices.getAllEquipos();
      console.log(this.equipos);
  }

  showViewTiposEquipoBio(){
    this.router.navigate(['/biomedica/tiposequipo']);
  }

  showViewServicios(){
    this.router.navigate(['/biomedica/servicios']);
  }

  showViewEmpComodatos(){
    this.router.navigate(['biomedica/empComodatos']);
  }

}
