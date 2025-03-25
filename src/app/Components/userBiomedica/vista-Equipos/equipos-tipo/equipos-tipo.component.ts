import { Component, inject, OnInit } from '@angular/core';
import { EquiposService } from '../../../../Services/appServices/biomedicaServices/equipos/equipos.service';
import { TipoEquipoService } from '../../../../Services/appServices/general/tipoEquipo/tipo-equipo.service';

@Component({
  selector: 'app-equipos-tipo',
  templateUrl: './equipos-tipo.component.html',
  styleUrl: './equipos-tipo.component.css'
})
export class EquiposTipoComponent implements OnInit{

  equipos! : any[];
  tipoEquipo! : any;
  equipoServices = inject(EquiposService);
  tipoEquipoServices = inject(TipoEquipoService);
  searchText: string = '';

  loading: boolean = false;

  async ngOnInit() {
      this.equipos = await this.equipoServices.getAllEquiposTipo(localStorage.getItem('idTipoEquipo'));
      this.tipoEquipo = await this.tipoEquipoServices.getTipoEquipo(localStorage.getItem('idTipoEquipo'));
  }


  filteredTiposEquipos() {
    return this.equipos.filter(equipo => {
      const search = this.searchText.toLowerCase();
      return (
        equipo.nombres.toLowerCase().includes(search) ||
        equipo.marca.toLowerCase().includes(search) ||
        equipo.modelo.toLowerCase().includes(search) ||
        equipo.serie.toLowerCase().includes(search)
      );
    });
  }
}
