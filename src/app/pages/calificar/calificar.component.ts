import { Component, OnInit } from '@angular/core';
import { Evaluacion } from '../../models/evaluacion.model';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Heuristicas } from '../../models/heuristicas';
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
  // heuristicas:Heuristicas[]=[];
  // bandera: boolean= true;
  valores: [number] = [0];
  idEvaluacion:string
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario'))
  // idEvaluador:string = JSON.stringify(this.usuario._id)
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
    // this.arreglarHeuristicas();
    // this.getUsuario();
  }

  cargarEvaluacion(id:string){
    this._evaluacionService.mostrarEvalaucion(id).subscribe( evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      console.log(this.evaluacion.coordinador.nombre);
      

    })
  }

  // getUsuario(){
  //   var id = this.evaluacion.coordinador;
  //   this._usuarioService.getusuario(id).subscribe(usuario => {
  //     this.evaluacion.coordinador = usuario.nombre,
  //     console.log(usuario);
      
  //   })
  // }
  // cargarHeuristicas(id:any){
  //   this._evaluacionService.mostrarHeuristica(id).subscribe(heuristica =>{
  //     this.heuristicas.push(heuristica)
  //   })
  // }

  // arreglarHeuristicas(){
  //   if (this.bandera) {
  //     let a = this.evaluacion.heuristicas;
  //     for (let h of a) {
  //       this.cargarHeuristicas(h);
  //     }
  //     this.bandera = false;
  //     // console.log(this.heuristicas);      
  
  //   } else {
  //     console.log('ya se cargaron');      
  //   }
   
  // }

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
