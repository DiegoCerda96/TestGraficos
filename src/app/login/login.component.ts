import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { UsuariosModel } from 'app/models/usuarios.model';
import { HttpService } from 'app/services/http.service';
import { ComunidadesModel } from '../models/comunidades.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  msg: string;
  display: boolean = false;
  usuario: UsuariosModel[] = [];
  comunidad: ComunidadesModel[] = [];

  constructor(public authService: AuthService, public router: Router, public afAuth: AngularFireAuth, private httpService: HttpService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(data => {
      if (!data) {
        return;
      } else {
        // this.router.navigate(['/administracion']);
      }
    })
  }

  login() {

    // if (this.email !== 'zetta.controlacceso@gmail.com' ) {
    //   return false;
    // }

    Swal.fire({
      title: 'Espere',
      text: 'Iniciando Sesión',
      allowOutsideClick: false
    });

    Swal.showLoading();

    const user = this.authService.login(this.email, this.password);
    user.
    then(value => {
      this.msg = value;
      this.display = true;
      Swal.fire({
        title: 'Inicio de Sesión',
        text: 'Correcto',
        type: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/administracion']);
      })
      .catch(err => {
        this.msg = err.message;
        this.display = true;
        Swal.fire({
          title: 'Error',
          text: 'Usuario o Contraseña Inválidos',
          type: 'error',
          showConfirmButton: true
        });
      });
  }


}
