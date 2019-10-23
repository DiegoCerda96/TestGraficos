import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from 'app/models/usuarios.model';
import { PropiedadesModel } from 'app/models/propiedades.model';
import { ComunidadesModel } from 'app/models/comunidades.model';
import { HttpService } from 'app/services/http.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from 'app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ComunidadesFireModel } from '../../models/comunidadesFire.model';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {


  constructor(public authService: AuthService, public afAuth: AngularFireAuth,
    private httpService: HttpService, private http: HttpClient) { }

    ngOnInit() {
      this.httpService.getEmailReport().subscribe(data => {
        console.log('** Emails **')
        console.log(data);
      });
    }


}
