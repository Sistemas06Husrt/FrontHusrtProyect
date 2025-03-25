import { Component, inject, OnInit } from '@angular/core';
import { ServicioService } from '../../../Services/appServices/general/servicio/servicio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clasificacion-servicio',
  templateUrl: './clasificacion-servicio.component.html',
  styleUrl: './clasificacion-servicio.component.css'
})
export class ClasificacionServicioComponent implements OnInit {

  servicios! : any[];
  servicioServices = inject(ServicioService)
  searchText: string = '';

  constructor (private router: Router){
  }

  async ngOnInit() {
    try{
      this.servicios = await this.servicioServices.getAllServicios();
    }catch{

    }
  }

  filteredServicios() {
    return this.servicios.filter(servicio =>
      servicio.nombres.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  viewEquiposServicio(idServicio: any){
    localStorage.setItem("idServicio", idServicio);
    this.router.navigate(['biomedica/equiposservicio']);
  }
}
