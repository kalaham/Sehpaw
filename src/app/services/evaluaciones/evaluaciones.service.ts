import { Injectable } from '@angular/core';
import { Evaluacion } from '../../models/evaluacion.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class EvaluacionesService {

  // evaluacion: Evaluacion;
  token: string = localStorage.getItem('token');
  constructor(
    public _http: HttpClient,
    public _router: Router
  ) { }

  mostrarEvaluaciones() {
    let url = URL_SERICIOS + '/evaluacion/todas';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

      swal({
        title: 'Actulizando....',
        timer: 1000,
        type: 'info',
        showConfirmButton: false
      })
      return resp.evaluaciones;
    }));
  }

  mostrarEvalaucion(id: string) {
    let url = URL_SERICIOS + '/evaluacion/' + id;
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
      return resp.evaluacion;
    }));
  }

  mostarEvaluacionesRol(){
    let url = URL_SERICIOS + '/evaluacion/';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

      swal({
        title: 'Actulizando....',
        timer: 1000,
        type: 'info',
        showConfirmButton: false
      })
      return resp.evaluaciones;
    }));
  }

  crearEvaluacion(evaluacion: Evaluacion){
    let url = URL_SERICIOS + '/evaluacion';
    url = url + '/?token=' + this.token;
    return this._http.post(url, evaluacion).pipe(map((resp: any) => {

      swal({
        title: 'Evalucion creada para: ' + evaluacion.nombreSitio,
        timer: 2000,
        type: 'success',
        showConfirmButton: false
      })
      return resp.evaluaciones;
    }));
  }

  monstarHeuristicas(){
    let url = URL_SERICIOS + '/heuristica';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
      console.log(resp.heuristicas);      
      return resp.heuristicas;
    }));
  }

  mostrarHeuristica(id:string){
    let url = URL_SERICIOS + '/heuristica/'+ id;
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
      // console.log(resp.heuristica);      
      return resp.heuristica;
    }));
  }

  eliminarEvaluacion(id:string){
    let url = URL_SERICIOS + '/evaluacion/'+ id;
    url = url + '/?token=' + this.token;
    return this._http.delete(url).pipe(map((resp: any) => {
          
      return resp.evaluacion;
    }));
  }

}
