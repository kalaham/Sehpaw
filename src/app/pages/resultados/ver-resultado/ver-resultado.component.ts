import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import { Evaluacion } from '../../../models/evaluacion.model';
import { ResultadoService } from '../../../services/resultado/resultado.service';
import { PrincipioService } from '../../../services/principio/principio.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ver-resultado',
  templateUrl: './ver-resultado.component.html',
  styles: []
})
export class VerResultadoComponent implements OnInit {
  data: any = [];
  evaluacion: Evaluacion = new Evaluacion('', new Date, '', '', [], [], false);
  menu: string[] = ['Por Heuristicas',
    'Mejor Heuristica',
    'Peor Heuristica',
    'Por Principios',
    'Mejor principio',
    'Peor principio',
    'Por evaluador'
  ]
  promedios: any = [];
  perceptible: any = [];
  robusto: any = [];
  comprencible: any = [];
  operable: any = [];
  Iperceptible: any = []
  Ioperable: any = []
  Irobusto: any = []
  Icomprencible: any = []

  dataPerceptoble: any = [
    { data: ['0']},
    { data: ['0'] },
    { data: ['0'] },
  ]
  dataOperable: any = []
  dataRobusto: any = []
  dataComprencible: any = []


  prin = [
    {
      titulo: 'Perceptible',
      hs: this.perceptible,
      i: this.Iperceptible,
      total: 0,
      data: this.dataPerceptoble

    },
    {
      titulo: 'Comprencible',
      hs: this.comprencible,
      i: this.Icomprencible,
      total: 0,
      data: this.dataPerceptoble
    },
    {
      titulo: 'Operable',
      hs: this.operable,
      i: this.Ioperable,
      data: this.dataPerceptoble,

      total: 0
    },
    {
      titulo: 'Robusto',
      hs: this.robusto,
      i: this.Irobusto,
      data: this.dataPerceptoble,

      total: 0
    }
  ]

  constructor(
    public _evaluacionService: EvaluacionesService,
    public activatedRoute: ActivatedRoute,
    public _resultadoService: ResultadoService,
    public _principioService: PrincipioService,
    // public _datePipe: DatePipe
  ) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id !== '') {
        this.cargarEvaluacion(id);
      }
    });
    console.log(this.prin, this.dataPerceptoble);

  }

  ngOnInit() {
  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      // this.evaluacion.fecha = this._datePipe.transform(this.evaluacion.fecha )
      this.calcular(evalu)
      this.agruparPorPrincipio(evalu.heuristicas)
      this.prueba(evalu)
      this.totalPromedioPrincipio()
      this.graficaPorPrincipio()

    })
  }

  calcular(eva: any) {
    var numEva = parseInt(eva.evaluadores.length);
    for (const i in eva.evaluadores[0].valores) {
      let pro: number = 0;
      for (const j in eva.evaluadores) {
        var t = parseInt(eva.evaluadores[j].valores[i])
        pro = (pro + t)
        if (parseInt(j) == (numEva - 1)) {
          pro = pro / numEva;
          this.promedios.push(pro.toFixed(2))
        }
      }
    }
  }

  prueba(evaluacion) {
    for (const k in evaluacion.heuristicas) {
      const h = evaluacion.heuristicas[k];
      var e = [];
      for (const i in evaluacion.evaluadores[0].valores) {
        var arr = [];
        for (const j in evaluacion.evaluadores) {
          var t = parseInt(evaluacion.evaluadores[j].valores[i])
          arr.push(t)
          if (parseInt(j) == (evaluacion.evaluadores.length - 1)) {
            e.push(arr)
          }
        }
        h.valores = e[k]
      }
      h.valores.promedio = this.promedios[k]
    }
  }

  agruparPorPrincipio(heuriscas: any) {
    var slice = 3;
    for (const h of heuriscas) {
      switch (h.indice.charAt(0)) {
        case "P":
          this.perceptible.push(h)
          this.Iperceptible.push(h.indice)

          break;
        case "O":
          this.operable.push(h)
          this.Ioperable.push(h.indice)

          break;
        case "C":
          this.comprencible.push(h)
          this.Icomprencible.push(h.indice)

          break;
        case "R":
          this.robusto.push(h)
          this.Irobusto.push(h.indice)
          break;
        default:
          break;
      }
    }
  }

  totalPromedioPrincipio() {
    for (const p of this.prin) {
      var total = 0;
      for (const h of p.hs) {
        var x = parseFloat(h.valores.promedio);
        total = (total + x)
      }
      total = (total / p.hs.length)
      p.total = total;
    }
  }

  graficaPorPrincipio() {
    var slice = 3;
    var aux = [];
    for (const p of this.prin) {
      var arr = [];

      for (const evaluador of this.evaluacion.evaluadores) {
        aux = []
        for (const valor of evaluador.valores.slice(0, p.hs.length)) {
          aux.push(parseInt(valor))
        }
        // console.log(aux);
        var obj = { data: aux, label: evaluador.evaluador.nombre }
        // console.log(obj);
        arr.push(obj)
      }
      // console.log(arr);
      p.data = arr
      slice += 3
    }
  }
}
