import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { NuevaEvaluacionComponent } from './nueva-evaluacion/nueva-evaluacion.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PagesComponent } from './pages.component';
import { VerResultadoComponent } from './resultados/ver-resultado/ver-resultado.component';
import { ConfiguracionesComponent } from './settings/configuraciones/configuraciones.component';
import { PerfilComponent } from './settings/perfil/perfil.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'evaluaciones', component: EvaluacionesComponent },
            { path: 'resultados', component: ResultadosComponent },
            { path: 'nueva-evaluacion', component: NuevaEvaluacionComponent },
            { path: 'ver-resultados', component: VerResultadoComponent },
            { path: 'settings', component: ConfiguracionesComponent },
            { path: 'account', component: PerfilComponent },

           { path: '', pathMatch: 'full', redirectTo: '/evaluaciones' }
        ]

    }
];

export const pages_routes = RouterModule.forChild(pagesRoutes);

