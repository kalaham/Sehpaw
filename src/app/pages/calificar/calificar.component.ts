import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../models/evaluacion.model';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Resultado } from '../../models/resultado.model';
import { Usuario } from '../../models/usuario.model';
import { ResultadoService } from '../../services/resultado/resultado.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styles: []
})
export class CalificarComponent implements OnInit {

  evaluacion: Evaluacion;
  valores: [number] = [0];
  idEvaluacion:string
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario'))
  resulGuardado:Resultado;
  constructor(
    public _evaluacionService: EvaluacionesService,
    public activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,
    public _resultadoService: ResultadoService
  ) {
    activatedRoute.params.subscribe( params => {
      this.idEvaluacion = params['id'];
      if ( this.idEvaluacion !== '' ) {
        this.cargarEvaluacion(this.idEvaluacion);
      }
    });
   }

  ngOnInit() {

  }

  cargarEvaluacion(id:string){
    this._evaluacionService.mostrarEvalaucion(id).subscribe( evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      console.log(this.evaluacion.coordinador.nombre);
      

    })
  }

  guardarResultado(){
    var resultado:Resultado = new Resultado(this.idEvaluacion,this.valores);
    console.log(resultado);
    
    this._resultadoService.guardarResultado(resultado).subscribe(resul=>{
      this.resulGuardado = resul;
      console.log(resul);     
    })
    console.log(this.valores);    
  }
}
