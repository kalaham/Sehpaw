import { Component, OnInit } from '@angular/core';
import { EvaluacionesService } from 'src/app/services/service.index';
import { ActivatedRoute } from '@angular/router';
import { Evaluacion } from '../../../models/evaluacion.model';
import { ResultadoService } from '../../../services/resultado/resultado.service';
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
  promedios: any = [];
  perceptible: any = [];
  robusto: any = [];
  comprencible: any = [];
  operable: any = [];
  prin = [
    {
      titulo: 'Perceptible',
      hs: this.perceptible,
      total: 0
    },
    {
      titulo: 'Comprencible',
      hs: this.comprencible,
      total: 0
    },
    {
      titulo: 'Operable',
      hs: this.operable,
      total: 0
    },
    {
      titulo: 'Robusto',
      hs: this.robusto,
      total: 0
    }
  ]

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
      }
    });

  }

  ngOnInit() {
  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      this.calcular(evalu)
      this.agruparPorPrincipio(evalu.heuristicas)
      this.prueba(evalu)
      this.totalPromedioPrincipio()
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
    for (const h of heuriscas) {
      switch (h.indice.charAt(0)) {
        case "P":
          this.perceptible.push(h)
          break;
        case "O":
          this.operable.push(h)
          break;
        case "C":
          this.comprencible.push(h)
          break;
        case "R":
          this.robusto.push(h)
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
      total = (total/p.hs.length)
      p.total =  total;
    }
  }
}
