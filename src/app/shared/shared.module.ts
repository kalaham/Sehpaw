import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  exports:[
    SidebarComponent,
    NopagefoundComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
