import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';
import { UsuariosModel } from 'app/models/usuarios.model'
import { PropiedadesModel } from 'app/models/propiedades.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import Swal from 'sweetalert2';
import { ComunidadesModel } from '../../models/comunidades.model';
import { Component, OnInit, } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }


}
