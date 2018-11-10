import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/models/resultado.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ResultadoService } from 'src/app/services/service.index';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  adminRol: boolean = false;
  resultados: Resultado[] = [];
  rol: string = localStorage.getItem('role');
  constructor(
    public _usuarioService: UsuarioService,
    public _resultadoService: ResultadoService
  ) { }

  ngOnInit() {
    this.cargarResultados();
  }

  cargarResultados() {
    this._resultadoService.mostrarResultados()
      .subscribe(resultados => this.resultados = resultados)
  }

}
