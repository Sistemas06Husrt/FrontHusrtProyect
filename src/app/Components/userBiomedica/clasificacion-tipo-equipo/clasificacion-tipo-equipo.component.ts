import { Component, inject, OnInit } from '@angular/core';
import { TipoEquipoService } from '../../../Services/appServices/general/tipoEquipo/tipo-equipo.service';


@Component({
  selector: 'app-clasificacion-tipo-equipo',
  templateUrl: './clasificacion-tipo-equipo.component.html',
  styleUrl: './clasificacion-tipo-equipo.component.css'
})
export class ClasificacionTipoEquipoComponent implements OnInit {

  tiposEquipos! : any[];
  tipoEquipoServices = inject(TipoEquipoService);
  searchText: string = '';

  async ngOnInit() {
    try{
      this.tiposEquipos = await this.tipoEquipoServices.getAllTiposEquiposBiomedica();
    }catch{

    }
  }

  filteredTiposEquipos() {
    return this.tiposEquipos.filter(tipoEquipo =>
      tipoEquipo.nombres.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
