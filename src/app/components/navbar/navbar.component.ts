import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent  {

  constructor(public auth:AuthService) {
    // se debe llamar al metodo handleAuthentication 
    auth.handleAuthentication();
  }



    login(){
      this.auth.login();
    }

    salir(){
      this.auth.logout();
    }


}
