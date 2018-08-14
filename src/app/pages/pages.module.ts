import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaEvaluacionComponent } from './nueva-evaluacion/nueva-evaluacion.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SharedModule } from '../shared/shared.module';
import { pages_routes } from './pages.routes';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    pages_routes
  ],
  declarations: [
    NuevaEvaluacionComponent, 
    EvaluacionesComponent, 
    ResultadosComponent,
    PagesComponent
  ],
  
})
export class PagesModule { }
