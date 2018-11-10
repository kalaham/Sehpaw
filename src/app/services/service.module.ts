import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AdminGuard, ResultadoService, SharedService, SidebarService, UsuarioService} from './service.index';
import { LoginGuardGuard } from './guards/login-guard.guard';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpClientModule
     ],
    providers: [ 
        SharedService,
        SidebarService,
        UsuarioService,
        LoginGuardGuard,
        ResultadoService,
        AdminGuard
     ],
    declarations:[  ]
})
export class ServiceModule { }