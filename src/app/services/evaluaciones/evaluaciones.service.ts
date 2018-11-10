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

  evaluacion:Evaluacion;
  token: string;
  constructor(
    public _http:HttpClient,
    public _router:Router
  ) { }

  mostrarEvaluaciones() {
    this.token= localStorage.getItem('token');
    let url = URL_SERICIOS + '/evaluacion/todas';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

      swal({
        title: 'Actulizando....',
        timer: 800,
        type: 'info',
        showConfirmButton: false
      })
        return resp.evaluaciones;
      }));
  }

}
