import { Component, OnInit } from '@angular/core';
import { Evaluacion } from 'src/app/models/evaluacion.model';
import { UsuarioService, EvaluacionesService } from '../../services/service.index';
import swal from 'sweetalert2';
import { Heuristicas } from '../../models/heuristicas';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styles: []
})
export class EvaluacionesComponent implements OnInit {

  role:Number = 0;
  evaluaciones: Evaluacion[] = [];
  usu: any = JSON.parse(localStorage.getItem('usuario'));
  rol:string = JSON.stringify(this.usu.role)
  eva:Evaluacion;

  constructor(
    public _evaluacionesService: EvaluacionesService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.cargarEvaluaciones();
    
  }

  cargarEvaluaciones() {
    if (this.rol === '\"ADMIN_ROLE\"') {
      //this.adminRol = true;
      this.role = 1;
      this._evaluacionesService.mostrarEvaluaciones()
        .subscribe(evaluaciones => this.evaluaciones = evaluaciones);
    } else {
      if (this.rol == '\"EVALUADOR_ROLE\"') {
        this.role =2;
      }else{
        this.role=3
      }
      this._evaluacionesService.mostarEvaluacionesRol()
        .subscribe(evaluaciones => this.evaluaciones = evaluaciones)
    }
  }

  eliminarEvaluacion(id:string){
    this._evaluacionesService.eliminarEvaluacion(id).subscribe( evaDelete =>{ 
      this.cargarEvaluaciones();
      this.eva = evaDelete
    });
  }

}
