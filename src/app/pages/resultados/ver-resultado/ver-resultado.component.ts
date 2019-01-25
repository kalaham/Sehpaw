import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  p: Principio[] = [];
  promedios: any = [];
  promediosPrincipios:any = [];


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
    this.cargarPrincipios()
  }

  cargarEvaluacion(id: string) {
    this._evaluacionService.mostrarEvalaucion(id).subscribe(evalu => {
      this.evaluacion = evalu;
      console.log(evalu);
      this.calcular(evalu)
    })
  }

  cargarPrincipios() {
    this._principioService.getPrincipios().subscribe(principio => {
      this.p = principio;
      console.log(this.p);
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
    console.log(this.promedios);

    




  }

}
