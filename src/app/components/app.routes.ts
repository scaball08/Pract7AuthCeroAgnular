import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PreciosComponent } from './precios/precios.component';
import { ProtegidaComponent } from './protegida/protegida.component';
import { AuthGuardService } from '../services/auth-guard.service';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  {
    path: 'protegida',
     component: ProtegidaComponent,
     // canActivate : [arreglo_de_REglas]
     canActivate: [AuthGuardService]
   },
  { path: '',pathMatch: 'full',redirectTo : 'home'  },
  { path: 'callback',pathMatch: 'full',redirectTo : 'home'  },
  { path: '**', pathMatch: 'full',redirectTo : 'home'  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
