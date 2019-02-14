import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from '../../../services/evaluaciones/evaluaciones.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  usu: any = JSON.parse(localStorage.getItem('usuario'));
  evaluaciones: number;
  constructor(
    public _evaluacionesService: EvaluacionesService,
  ) { }

  ngOnInit() {
    this._evaluacionesService.mostarEvaluacionesRol().subscribe((data) => this.evaluaciones = data.length)
  }

}
