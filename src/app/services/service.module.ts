import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { SharedService, SidebarService } from './service.index';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpClientModule
     ],
    providers: [ 
        SharedService,
        SidebarService
     ],
    declarations:[  ]
})
export class ServiceModule { }