import { Component, inject, OnInit } from '@angular/core';
import { ServicioService } from '../../../Services/appServices/general/servicio/servicio.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-clasificacion-servicio',
    templateUrl: './clasificacion-servicio.component.html',
    styleUrl: './clasificacion-servicio.component.css',
    standalone: false
})

export class ClasificacionServicioComponent implements OnInit {

  servicios! : any[];
  cantidadesEquipos: { [id: number]: number } = {};
  servicioServices = inject(ServicioService)
  searchText: string = '';

  constructor (private router: Router){
  }

  async ngOnInit() {
    try{
      this.servicios = await this.servicioServices.getAllServicios();

      for (let servicio of this.servicios) {
        this.obtenerCantidadEquipos(servicio.id);
      }
    }catch{

    }
  }

  async obtenerCantidadEquipos(idServicio: number) {
    try {
      const cantidad = await this.servicioServices.getCantidadEquipos(idServicio);
      this.cantidadesEquipos[idServicio] = cantidad;
    } catch (error) {
      console.error(`Error al obtener la cantidad de equipos para el responsable ${idServicio}`, error);
      this.cantidadesEquipos[idServicio] = 0; // En caso de error, poner 0
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
