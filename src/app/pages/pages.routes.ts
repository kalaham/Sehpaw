import { RouterModule, Routes } from '@angular/router';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { NuevaEvaluacionComponent } from './nueva-evaluacion/nueva-evaluacion.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PagesComponent } from './pages.component';
import { VerResultadoComponent } from './resultados/ver-resultado/ver-resultado.component';
import { ConfiguracionesComponent } from './settings/configuraciones/configuraciones.component';
import { PerfilComponent } from './settings/perfil/perfil.component';
import { CalificarComponent } from './calificar/calificar.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdminGuard } from '../services/service.index';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate:[LoginGuardGuard],
        children: [
            { path: 'evaluaciones', component: EvaluacionesComponent ,data: { titulo: 'Evaluaciones' }},
            { path: 'resultados', component: ResultadosComponent,data: { titulo: 'Resultado' } },
            { path: 'nueva-evaluacion', component: NuevaEvaluacionComponent,data: { titulo: 'Nueva evaluacion' } },
            { path: 'ver-resultados', component: VerResultadoComponent,data: { titulo: 'Ver resultados' } },
            { path: 'calificar', component: CalificarComponent,data: { titulo: 'Calificar' } },
            { path: 'settings', component: ConfiguracionesComponent,data: { titulo: 'Configuracion' } },
            { path: 'account', component: PerfilComponent,data: { titulo: 'Perfil' } },
            { 
                path: 'usuarios',
                canActivate: [ AdminGuard ],
                component: UsuariosComponent,
                data: { titulo: 'Usuarios' }
            },

           { path: '', pathMatch: 'full', redirectTo: '/evaluaciones' }
        ]
    }
];

export const pages_routes = RouterModule.forChild(pagesRoutes);

