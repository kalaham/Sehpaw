import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaEvaluacionComponent } from './nueva-evaluacion/nueva-evaluacion.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SharedModule } from '../shared/shared.module';
import { pages_routes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { VerResultadoComponent } from './resultados/ver-resultado/ver-resultado.component';
import { ConfiguracionesComponent } from './settings/configuraciones/configuraciones.component';
import { PerfilComponent } from './settings/perfil/perfil.component';
import { CalificarComponent } from './calificar/calificar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { GraficoRadarComponent } from '../components/grafico-radar/grafico-radar.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    pages_routes,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
  declarations: [
    NuevaEvaluacionComponent, 
    EvaluacionesComponent, 
    ResultadosComponent,
    PagesComponent,
    VerResultadoComponent,
    ConfiguracionesComponent,
    PerfilComponent,
    CalificarComponent,
    UsuariosComponent,
    GraficoRadarComponent
  ],
  exports:[
    GraficoRadarComponent
  ]
  
})
export class PagesModule { }
