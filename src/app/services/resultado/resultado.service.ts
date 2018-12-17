import { Injectable } from '@angular/core';
import { Resultado } from '../../models/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  resultado: Resultado;
  token: string =  localStorage.getItem('token');
  constructor(
    public _http: HttpClient,
    public _router: Router,
  ) { }

  mostrarResultados() {
    let url = URL_SERICIOS + '/resultado/todos';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

      swal({
        title: 'Actulizando....',
        timer: 1000,
        type: 'info',
        showConfirmButton: false
      })
      // console.log(resp.resultados);     
      return resp.resultados;
    }));
  }
  mostrarResultadosRol() {
    let url = URL_SERICIOS + '/resultado';
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {

      swal({
        title: 'Actulizando....',
        timer: 1000,
        type: 'info',
        showConfirmButton: false
      })
      console.log(resp.mensaje);
      
      return resp.resultados;
    }));
  }
  mostrarResultadosEvaluacion(id:any) {
    let url = URL_SERICIOS + '/resultado/'+ id;
    url = url + '/?token=' + this.token;
    return this._http.get(url).pipe(map((resp: any) => {
       
      // console.log('El Ok es falso' + resp);
        
        swal({
          title: 'Actulizando....',
          timer: 1000,
          type: 'info',
          showConfirmButton: false
        })
        console.log(resp.mensaje);
        
        return resp.resultados;
      

    }));
  }

  guardarResultado(resultado:Resultado){
    let url = URL_SERICIOS + '/resultado';
    url = url + '/?token=' + this.token;

    return this._http.post(url, resultado).pipe(map((resp: any)=>{
      swal({
        title: 'Bien..',
        timer: 1000,
        type: 'success',
        showConfirmButton: false
      })
      return resp.resulGuardado;
    }));
  }

}
