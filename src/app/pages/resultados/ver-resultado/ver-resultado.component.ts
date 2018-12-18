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
  indices: string[] = [];
  p: Principio[] = [];
  evaluada: boolean = false;

  perceptible: number[] = [];
  comprencible: number[] = [];
  operable: number[] = [];
  robusto: number[] = [];
  indicesPerceptible: string[] = [];
  indicesComprencible: string[] = [];
  indicesOperable: string[] = [];
  indicesRobusto: string[] = [];

  constructor(
    public _evaluacionService: EvaluacionesService,
    public activatedRoute: ActivatedRoute,
    public _resultadoService: ResultadoService,
    public _principioService: PrincipioService

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

  sliceResultados(valores: any) {

    this.perceptible = valores.slice(0, 12)
    this.operable = valores.slice(12, 27)
    this.comprencible = valores.slice(27, 42)
    this.robusto = valores.slice(42, 51)

    // for (const resultado of resultados) {

    //   this.perceptible = resultado.valores.slice(0, 12)
    //   this.operable = resultado.valores.slice(13, 27)
    //   this.comprencible = resultado.valores.slice(27, 42)
    //   this.robusto = resultado.valores.slice(42, 51)
    //   console.log('principio PERCEPTIBLE ' + this.perceptible);
    //   console.log('principio OPERABLE ' + this.operable);
    //   console.log('principio COMPRENCIBLE ' + this.comprencible);
    //   console.log('principio ROBUSTO ' + this.robusto);
    // }


  }

  cargarResultados(id: string) {
    this._resultadoService.mostrarResultadosEvaluacion(id).subscribe(resultados => {
      this.resultados = resultados
      // this.sliceResultados(this.resultados)
      console.log(this.resultados);
      if (!resultados) {

      } else {
        this.evaluada = true;
      }
    })
  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      this.evaluacion
      console.log(evalu);
      this.getIndices(evalu)
    })
  }

  getIndices(evaluacion: any) {
    for (const h of evaluacion.heuristicas) {
      this.indices.push(h.indice)
    }
    this.indicesPerceptible = this.indices.slice(0, 12)
    this.indicesOperable = this.indices.slice(12, 27)
    this.indicesComprencible = this.indices.slice(27, 42)
    this.indicesRobusto = this.indices.slice(42, 51)
    console.log('principio PERCEPTIBLE ' + this.indicesPerceptible);
    console.log('principio OPERABLE ' + this.indicesOperable);
    console.log('principio COMPRENCIBLE ' + this.indicesComprencible);
    console.log('principio ROBUSTO ' + this.indicesRobusto);

    console.log(this.indices);
  }

  cargarPrincipios() {
    this._principioService.getPrincipios().subscribe(principio => {
      this.p = principio;
      console.log(this.p);
    })
  }

}
