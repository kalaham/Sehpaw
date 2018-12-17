import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from '../../services/evaluaciones/evaluaciones.service';
import { NgForm } from '@angular/forms';
import { Evaluacion } from '../../models/evaluacion.model';
import { Heuristicas } from '../../models/heuristicas';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { PrincipioService } from '../../services/principio/principio.service';
import { Principio } from '../../models/principio.model';

@Component({
  selector: 'app-nueva-evaluacion',
  templateUrl: './nueva-evaluacion.component.html',
  styles: []
})
export class NuevaEvaluacionComponent implements OnInit {

  fe = new Date();
  e: Usuario[] = [];
  elegir: boolean = true;
  evaluadores: string[] = [];
  heuristicas: string[] = [];

  fecha = this.fe.getDate() + "/" + (this.fe.getMonth() + 1) + "/" + this.fe.getFullYear();
  usuario: Usuario = JSON.parse(localStorage.getItem('usuario'))
  evaluacion: Evaluacion = new Evaluacion(this.usuario.nombre, this.fe, '', '', this.evaluadores, this.heuristicas, false);
  h: Heuristicas[] = [];
  p:Principio[]=[];


  constructor(
    public _evaluacionesService: EvaluacionesService,
    public _usuarioService: UsuarioService,
    public _principioService: PrincipioService
  ) { }

  ngOnInit() {
    this.getEvaluadores();
    this.mostrarheuristicas();
    this.getPrincipios()
  }

  get prueba() {
    return JSON.stringify(this.evaluacion)
  }

  pushAllHeuristicas() {
    this.elegir = false;
    for (const heuristica of this.h) {
      var index = this.heuristicas.indexOf(String(heuristica._id));

      if (index > -1) {
      } else {
        this.heuristicas.push(String(heuristica._id))
      }
    }
  }

  crearEvaluacion() {
    console.log(this.evaluacion);

    this._evaluacionesService.crearEvaluacion(this.evaluacion).subscribe(data => {
      console.log(data);
    });

  }

  mostrarheuristicas() {
    this._evaluacionesService.monstarHeuristicas()
      .subscribe(heuristicas => this.h = heuristicas);

  }

  getPrincipios(){
    this._principioService.getPrincipios().subscribe(principios =>{
      this.p =principios;
      console.log(this.p);      
    });
  }

  getEvaluadores() {
    this._usuarioService.getEvaluadores()
      .subscribe(evaluadores => this.e = evaluadores);
  }

  addOrRemoveHeuristica(id: string) {
    var index = this.heuristicas.indexOf(id);
    if (index > -1) {
      this.heuristicas.splice(index, 1);
    } else {
      this.heuristicas.push(id)
    }
  }

  addOrRemoveEvaluador(id: string) {
    var index = this.evaluadores.indexOf(id);
    if (index > -1) {
      this.evaluadores.splice(index, 1);
    } else {
      this.evaluadores.push(id)
    }
    console.log(this.evaluadores);

  }

  bandera(id: string) {
    for (let idEvaluador of this.evaluadores) {
      if (id == idEvaluador) {
        return true;
      }
    }
  }
  banderaH(id: string) {
    for (let idH of this.heuristicas) {
      if (id == idH) {
        return true;
      }
    }
  }

}
