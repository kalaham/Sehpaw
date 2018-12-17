import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  usu: any = JSON.parse(localStorage.getItem('usuario'));
  rol:string = JSON.stringify(this.usu.role)
  constructor(
     public _usuarioService: UsuarioService
  ) { }

  canActivate() {
    if (this.rol === '\"ADMIN_ROLE\"') {
      console.log('Guard ADMIN superado');
      
      return true;
    } else {
      console.log('Bloqueado por el ADMIN GUARD');
      this._usuarioService.logout();
      return false;
      
    }
  }
}