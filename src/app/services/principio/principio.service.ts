import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERICIOS } from '../../config/config';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrincipioService {

  token: string = localStorage.getItem('token');

  constructor(
    public _http: HttpClient    
  ) { }

  getPrincipios(){
    let url = URL_SERICIOS + '/principio';
    url=url + '/?token=' + this.token
    return this._http.get(url).pipe(map((resp:any)=> {
      return resp.principios
    }));


  }




}
