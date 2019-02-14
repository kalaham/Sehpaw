import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styles: []
})
export class ConfiguracionesComponent implements OnInit {
  usu: any = JSON.parse(localStorage.getItem('usuario'));

  constructor() { }

  ngOnInit() {
  }

}
