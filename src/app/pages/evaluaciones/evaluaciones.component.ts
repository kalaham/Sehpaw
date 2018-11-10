import { Component, OnInit } from '@angular/core';
import { Evaluacion } from 'src/app/models/evaluacion.model';
import { UsuarioService, EvaluacionesService } from '../../services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styles: []
})
export class EvaluacionesComponent implements OnInit {

  adminRol: boolean = false;
  evaluaciones: Evaluacion[] = [];
  rol: string = localStorage.getItem('role');

  constructor(
    public _evaluacionesService: EvaluacionesService,
    public _usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {
    this.cargarEvaluaciones();
    this.comprovarRol();
  }

  cargarEvaluaciones() {
    this._evaluacionesService.mostrarEvaluaciones()
      .subscribe(evaluaciones => this.evaluaciones = evaluaciones);
  }

  comprovarRol() {
    if (this.rol === 'ADMIN_ROLE') {
      return this.adminRol = true;
    }else{
      swal({
        title: 'Error',
        type: 'error',
        showConfirmButton: true,
        text: 'Lo sentimos tu no eres ADMIN'
      })
    }
  }

}
