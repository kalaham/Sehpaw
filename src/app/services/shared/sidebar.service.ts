import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  usu: any = JSON.parse(localStorage.getItem('usuario'));
  rol:string = JSON.stringify(this.usu.role)
  menu: any;

  constructor() {
    // console.log('entramos en el constructor' + this.rol);
    // console.log(this.rol);

    if (this.rol == '\"EVALUADOR_ROLE\"') {
      // console.log('pasamos el if de evaluador');

      this.menu = [
        { titulo: 'Evaluaciones', url: '/evaluaciones', icon: 'mdi mdi-clipboard-text' },
        // { titulo: 'resultados', url: '/resultados', icon: 'mdi mdi-clipboard-check' }
      ]

    }
    if (this.rol == '\"COORDINADOR_ROLE\"') {
      // console.log('pasamos el if de coordinador');

      this.menu = [
        { titulo: 'Nueva Evaluacion', url: '/nueva-evaluacion', icon: 'mdi mdi-playlist-plus' },
        { titulo: 'Evaluaciones', url: '/evaluaciones', icon: 'mdi mdi-clipboard-text' },
        // { titulo: 'Resultados', url: '/resultados', icon: 'mdi mdi-clipboard-check' }
      ]

    }
    if (this.rol == '\"ADMIN_ROLE\"') {
      this.menu = [
        { titulo: 'Usuarios', url: '/usuarios', icon: 'mdi mdi-account-multiple' },
        { titulo: 'Evaluaciones', url: '/evaluaciones', icon: 'mdi mdi-clipboard-text' },
        // { titulo: 'Resultados ', url: '/resultados', icon: 'mdi mdi-clipboard-check' }
      ]
    }
  }

}
