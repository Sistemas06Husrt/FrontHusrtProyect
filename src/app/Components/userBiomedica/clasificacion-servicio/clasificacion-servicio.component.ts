import { Component, inject, OnInit } from '@angular/core';
import { ServicioService } from '../../../Services/appServices/general/servicio/servicio.service';

@Component({
  selector: 'app-clasificacion-servicio',
  templateUrl: './clasificacion-servicio.component.html',
  styleUrl: './clasificacion-servicio.component.css'
})
export class ClasificacionServicioComponent implements OnInit {

  servicios! : any[];
  servicioServices = inject(ServicioService)
  searchText: string = '';

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
}
