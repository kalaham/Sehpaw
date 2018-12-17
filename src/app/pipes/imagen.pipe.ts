import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: string ): any {

    let url = URL_SERICIOS + '/img';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {

      case 'ADMIN_ROLE':
        url += '/ADMIN_ROLE/' + img;
      break;

      case 'COORDINADOR_ROLE':
        url += '/COORDINADOR_ROLE/' + img;
      break;

      case 'EVALUADOR_ROLE':
         url += '/EVALUADOR_ROLE/' + img;
      break;

      default:
        console.log('tipo de imagen no existe, usuario, medicos, hospitales', tipo);
        url += '/usurios/xxx';
    }

    return url;
  }

}
