import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PrincipalComponent } from './login/principal/principal.component';

const routes: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    { path: '**', component: NopagefoundComponent }
];

export const app_routes = RouterModule.forRoot(routes,{useHash:true});