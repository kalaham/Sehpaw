import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  usu: any = JSON.parse(localStorage.getItem('usuario'));
  rol:string = JSON.stringify(this.usu.role)
  constructor() { }

  ngOnInit() {
  }

}
