import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportceComponent } from './Components/Imaging/ReportCE/reportce/reportce.component';
import { ReportspediatricsComponent } from './Components/Servinte/Reports/reportspediatrics/reportspediatrics.component';
import { UsuariosServicioComponent } from './Components/News2/usuarios-servicio/usuarios-servicio.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'servinte/news2',
    pathMatch: 'full'
  },
  {path: 'imagenologia/citasCE', component: ReportceComponent},
  {path: 'servinte/reportepediatria', component: ReportspediatricsComponent},
  {path: 'servinte/news2', component: UsuariosServicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
