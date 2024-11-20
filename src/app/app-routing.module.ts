import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportceComponent } from './Components/Imaging/ReportCE/reportce/reportce.component';
import { ReportspediatricsComponent } from './Components/Servinte/Reports/reportspediatrics/reportspediatrics.component';
import { UsuariosServicioComponent } from './Components/News2/usuarios-servicio/usuarios-servicio.component';
import { AerolineaComponent } from './Components/Aerolinea/aerolinea/aerolinea.component';
import { LoginComponent } from './Components/login/login.component'
import {HomesuperadminComponent} from './Components/Homepage/homesuperadmin/homesuperadmin.component'
import {HomeadminsistemasComponent} from './Components/Homepage/homeadminsistemas/homeadminsistemas.component'
import { HomeadminbiomedicaComponent } from './Components/Homepage/homeadminbiomedica/homeadminbiomedica.component';
import { HomeadminmantenimientoComponent } from './Components/Homepage/homeadminmantenimiento/homeadminmantenimiento.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'servinte/news2',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'superadmin', component: HomesuperadminComponent},
  {path: 'adminsistemas', component: HomeadminsistemasComponent},
  {path: 'adminbiomedica', component: HomeadminbiomedicaComponent},
  {path: 'adminmantenimineto', component: HomeadminmantenimientoComponent},
  {path: 'imagenologia/citasCE', component: ReportceComponent},
  {path: 'servinte/reportepediatria', component: ReportspediatricsComponent},
  {path: 'servinte/news2', component: UsuariosServicioComponent},
  {path: 'acreditacion/aerolinea', component: AerolineaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
