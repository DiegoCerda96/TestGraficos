import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  forgot(email: string) {
    this.auth.forgot(email).then(() => {
      Swal.fire(
        'Éxito!',
        'Te enviamos un correo, revísalo y sigue las instrucciones!',
        'success'
      )
        .then((result) => {
          if (result.value) {
            window.location.href = 'login'
          }
        })
    })
      .catch((error) => {
        Swal.fire(
          'Ups!',
          'No tenemos registrado tu correo, consulta a tu administrador.',
          'error'
        )
      })
  }

}
