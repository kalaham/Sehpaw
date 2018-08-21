import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { app_routes } from './app.routes';
import { ServiceModule } from './services/service.module';
import { PrincipalComponent } from './login/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule,
    app_routes,
    ServiceModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
