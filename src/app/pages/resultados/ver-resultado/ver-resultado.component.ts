import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import { Evaluacion } from '../../../models/evaluacion.model';
import { ResultadoService } from '../../../services/resultado/resultado.service';
import { Resultado } from '../../../models/resultado.model';
import { Principio } from '../../../models/principio.model';
import { PrincipioService } from '../../../services/principio/principio.service';

@Component({
  selector: 'app-ver-resultado',
  templateUrl: './ver-resultado.component.html',
  styles: []
})
export class VerResultadoComponent implements OnInit {

  evaluacion: Evaluacion = new Evaluacion('', new Date, '', '', [], [], false);
  menu: string[] = ['Por Heuristicas',
    'Mejor Heuristica',
    'Peor Heuristica',
    'Por Principios',
    'Mejor principio',
    'Peor principio',
    'Por evaluador'
  ]
  bandera: boolean = true;
  resultados: Resultado[] = []
  indices: string []=[];
  p: Principio[]=[];
  constructor(
    public _evaluacionService: EvaluacionesService,
    public activatedRoute: ActivatedRoute,
    public _resultadoService: ResultadoService,
    public _principioService:PrincipioService

  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id !== '') {
        this.cargarEvaluacion(id);
        this.cargarResultados(id);
      }
    });
  }

  ngOnInit() {
    this.cargarPrincipios()
  }


  cargarResultados(id: string) {
    this._resultadoService.mostrarResultadosEvaluacion(id).subscribe(resultados => {
      this.resultados =resultados
      console.log(this.resultados);      
    })
  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      this.getIndices(evalu)
    })
  }

  getIndices(evaluacion:any){
      for (const h of evaluacion.heuristicas) {
        this.indices.push(h.indice)
      }
      console.log(this.indices);      
  }

  cargarPrincipios(){
    this._principioService.getPrincipios().subscribe(principio => { 
      this.p = principio;
      console.log(this.p);
      
     })
  }

 }
