import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {titulo:'Nueva Evaluacion', url:'/nueva-evaluacion', icon:'mdi mdi-playlist-plus'},
    {titulo:'Evaluaciones', url:'/evaluaciones', icon:'mdi mdi-clipboard-text'},
    {titulo:'resultados', url:'/resultados', icon:'mdi mdi-clipboard-check'}
  ]



  constructor() { }
}
