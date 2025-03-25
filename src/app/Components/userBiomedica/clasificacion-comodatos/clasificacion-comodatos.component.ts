import { Component, inject, OnInit } from '@angular/core';
import { ResponsableService } from '../../../Services/appServices/biomedicaServices/responsable/responsable.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-clasificacion-comodatos',
  templateUrl: './clasificacion-comodatos.component.html',
  styleUrl: './clasificacion-comodatos.component.css'
})

export class ClasificacionComodatosComponent {

    responsables! : any[];
    responsableServices = inject(ResponsableService)
    searchText: string = '';

  constructor (private router: Router){
  }

    async ngOnInit() {
      try{
        this.responsables = await this.responsableServices.getAllResponsablesComodatos();
        console.log(this.responsables);
      }catch{

      }
    }

    filteredResponsable() {
      return this.responsables.filter(responsable =>
        responsable.nombres.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    viewEquiposComodatos(idServicio: any){
      localStorage.setItem("idResponsable", idServicio);
      this.router.navigate(['biomedica/equiposcomodatos']);
    }
}
