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
  usuario: any = JSON.parse(localStorage.getItem('usuario'));
  rol:string = JSON.stringify(this.usuario.role)
  constructor(
    public _usuarioService: UsuarioService,
    public _resultadoService: ResultadoService
  ) { }

  ngOnInit() {
    this.cargarResultados();
  }


  cargarResultados() {
    if (this.rol == "ADMIN_ROLE"){
      this.adminRol = true;
      this._resultadoService.mostrarResultados()
      .subscribe(resultados => this.resultados = resultados);
    }else{
      this._resultadoService.mostrarResultadosRol()
      .subscribe(resultados => this.resultados = resultados);
    }
  }


  

}
