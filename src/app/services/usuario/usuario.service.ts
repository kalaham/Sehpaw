import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../../models/usuario.model';
import { URL_SERICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  constructor(
    public _http: HttpClient,
    public _router: Router
  ) {
    this.cargarStorage();
  }
  login(usuario: Usuario, recordarme: boolean = false) {

    if (recordarme) {
      localStorage.setItem('email', usuario.email)
    } else {
      localStorage.removeItem('email')
    }

    let url = URL_SERICIOS + '/login';
    return this._http.post(url, usuario).pipe(map((resp: any) => {

      // localStorage.setItem('id', resp.id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario) );
      swal({
        title: 'Bienvenido',
        timer: 1200,
        type: 'success',
        text: resp.usuario.nombre,
        showConfirmButton: false
      })
      this.cargarStorage();
      return true;
    }), catchError( err => {
      swal({
        title:'Error en el login',
        type: 'error',
        text: 'Credenciales incorrectas',
        showConfirmButton: true
      })
      return throwError(err)
    }));
  }


  estalogeado() {
    return (this.token.length > 5) ? true : false;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');

    this._router.navigate(['/login', location.reload(true)]);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    } else {
      this.token = '';
      this.usuario = null;
    }
  }


  crearUsuario(usuario: Usuario) {

    let url = URL_SERICIOS + '/usuario';

    return this._http.post(url, usuario).pipe(map((resp: any) => {

      swal('Usuario creado...', usuario.email, 'success');
      return resp.usuario;

    }));
  }

  mostrarUsuarios() {
    let url = URL_SERICIOS + '/usuario';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

        // swal('Actualizando');
        swal({
          title: 'Actulizando....',
          timer: 800,
          type: 'info',
          showConfirmButton: false
        })
        return resp.usuarios;

      }));
  }

  getEvaluadores(){
    let url = URL_SERICIOS + '/usuario/evaluadores';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
        console.log(resp.evaluadores);
        
        return resp.evaluadores;
      }));
  }

  getusuario(id:any){
    let url = URL_SERICIOS + '/usuario/'+ id;
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
      // console.log(resp.usuario);      
      return resp.usuario;
    }));
  }

 
}
