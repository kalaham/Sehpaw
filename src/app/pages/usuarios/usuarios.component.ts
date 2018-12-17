import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: []
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[]=[]

  constructor(public _usuarioService:UsuarioService) { }

  

  ngOnInit() {
    this.cargarUsuarios();    
  }

  cargarUsuarios() {
    this._usuarioService.mostrarUsuarios()
          .subscribe( usuarios => this.usuarios = usuarios );
  }
}
