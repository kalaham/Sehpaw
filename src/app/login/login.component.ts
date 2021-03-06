import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { NgForm } from '@angular/forms';

// declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  recarga: boolean = true;
  constructor(
    public _router: Router,
    public _usuarioService: UsuarioService

  ) {}

  ngOnInit() {
    // init_plugins();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true
    }
  }

  recargar() {
    if (this.recarga) {
      location.reload();
      this.recarga = false;
    }
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null,
      forma.value.email,
      forma.value.password,
      null
    )

    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe(respuesta => {
        this._router.navigate(['/evaluaciones'])
      });
  }



}
