import { Component, inject, OnInit } from '@angular/core';
import { EquiposService } from '../../../../Services/appServices/biomedicaServices/equipos/equipos.service';
import { ServicioService } from '../../../../Services/appServices/general/servicio/servicio.service';

@Component({
  selector: 'app-equipos-servicio',
  templateUrl: './equipos-servicio.component.html',
  styleUrl: './equipos-servicio.component.css'
})
export class EquiposServicioComponent implements OnInit{

  equipos! : any[];
  servicio! : any;
  equipoServices = inject(EquiposService);
  servicioServices = inject(ServicioService);
  loading: boolean = false;

  async ngOnInit(){


      this.equipos = await this.equipoServices.getAllEquiposServicio(localStorage.getItem("idServicio"));
      this.servicio = await this.servicioServices.getServicio(localStorage.getItem("idServicio"));
  }
}
