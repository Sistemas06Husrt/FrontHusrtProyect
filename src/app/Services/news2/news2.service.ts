import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News2Service {

  http = inject(HttpClient);

  getServicios(){
    const url = 'http://172.30.20.224:3002/ubicacionesconpacientes';
    return firstValueFrom(this.http.get<any[]>(url));
  }

  getPacientesServicio(ubicacion: any){
    const url = 'http://172.30.20.224:3002/pascientesubicacion/' + ubicacion.ubicod;
    return firstValueFrom(this.http.get<any[]>(url));
  }

  getSignosPaciente(epipac: any){
    const url = 'http://172.30.20.224:3002/signospaciente/' + epipac;
    return firstValueFrom(this.http.get<any>(url));
  }
}
