import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { NuevaEvaluacionComponent } from './nueva-evaluacion/nueva-evaluacion.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'evaluaciones', component: EvaluacionesComponent },
            { path: 'resultados', component: ResultadosComponent },
            { path: 'nueva-evaluacion', component: NuevaEvaluacionComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'evaluaciones' }
        ]

    }
];

export const pages_routes = RouterModule.forChild(pagesRoutes);

