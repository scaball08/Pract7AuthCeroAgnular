import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
// para agregar reglas a una ruta en espesifico se crea un servicio
// de la clase router y se importan las clases:
// ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot

 // IMPORTANTE: se debe agregar el servicio en el archivo de rutas :
 // { path: 'precios', component: PreciosComponent, canActivate : [arreglo_de_REglas]}

@Injectable({
  providedIn: 'root'
})

// se debe implementar la clase CanActivate
export class AuthGuardService implements CanActivate {


    constructor(private auth:AuthService) {


    }
     // se implemente el metodo canActivate el cual recibe  los parametros de :
     // la ruta a la que se desea accesar y el estado de la ruta
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("ruta:");
      console.log(route);
      console.log("estadoRuta:");
      console.log(state);

      if(this.auth.isAuthenticated()){
        console.log("Paso el Guard");
        return true;
      }else{
        console.log("Bloqueado por el Guard");
        return false;
      }
    }

}
