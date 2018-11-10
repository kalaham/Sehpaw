import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor ( 
    public _serviceUsuario: UsuarioService,
    public _router:Router
  ){}

  canActivate(){

    if (this._serviceUsuario.estalogeado()) {
      console.log('guard superado');
      return true;
    } else {
      console.log('guard NO superado');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
