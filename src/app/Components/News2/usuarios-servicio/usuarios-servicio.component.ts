import { News2Service } from './../../../Services/news2/news2.service';
import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-usuarios-servicio',
    templateUrl: './usuarios-servicio.component.html',
    styleUrl: './usuarios-servicio.component.css',
    providers: [MessageService],
    standalone: false
})
export class UsuariosServicioComponent implements OnInit {

  services! : any[];
  pacientes! : any[];
  signosVitales! : any[];
  itemselected : Number | undefined;
  news2Service = inject(News2Service);

  visibleSearch: boolean = false;


  async verServicio(){
    console.log('NUEVAMENTE SE EJECUTO');
    const ubicacion = {
      ubicod : this.itemselected
    }
    const sigpac : any[] = [];

    try{
    this.visibleSearch = true;
    this.pacientes = await this.news2Service.getPacientesServicio(ubicacion);
    for (let paciente = 0; paciente < this.pacientes.length; paciente++) {
      const pacienteact = this.pacientes[paciente];
      const signos = await this.news2Service.getSignosPaciente(pacienteact.epiactepi);
      if(signos.frecuenciaCardiaca != undefined && signos.SO2 != undefined){
        const signospaciente = {pacienteact, signos}
        sigpac.push(signospaciente);
      } else{
        const signospaciente = {pacienteact, undefined}
        sigpac.push(signospaciente);
      }
    }
    this.signosVitales = sigpac;
    console.log(this.signosVitales);
    this.visibleSearch = false;
    } catch {
      console.log('No fue posible obtener los pacientes');
    }
    setTimeout(() => {
      this.verServicio();
    }, 240000);
  }

 async ngOnInit(){
  try{
     this.services = await this.news2Service.getServicios();
  }
  catch{
    console.log('Error al cargar los servicios');
  }
 }
}
