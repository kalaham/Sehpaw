import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../models/evaluacion.model';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styles: []
})
export class CalificarComponent implements OnInit {

  evaluacion: Evaluacion;
  valores: [any] = [0];
  idEvaluacion: string
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario'))
  constructor(
    public _evaluacionService: EvaluacionesService,
    public activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,
    public _router: Router
  ) {
    activatedRoute.params.subscribe(params => {
      this.idEvaluacion = params['id'];
      if (this.idEvaluacion !== '') {
        this.cargarEvaluacion(this.idEvaluacion);
      }
    });
  }

  ngOnInit() {

  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      console.log(this.evaluacion.coordinador.nombre);


    })
  }

  guardarResultado() {
    console.log('estos son los valores: ' + this.valores);
    console.log('estos es el ID: ' + this.idEvaluacion);
    
    this._evaluacionService.actualizarValores( this.idEvaluacion, this.valores,).subscribe(evaUpdate => { 
      //this.evaluacion = evaUpdate;
      console.log(this.evaluacion);      
      this._router.navigate(['/evaluaciones']);
     });
  }
}
