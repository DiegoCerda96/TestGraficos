import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { ComunidadesModel } from '../../models/comunidades.model';
import { UsuariosModel } from '../../models/usuarios.model';
import { ComunidadesFireModel } from '../../models/comunidadesFire.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  comunidad: ComunidadesModel = new ComunidadesModel()
  comunidadFire: ComunidadesFireModel = new ComunidadesFireModel()
  forma: FormGroup;
  id: number;
  str: string;

  constructor(public authService: AuthService, private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.forma = new FormGroup({
      Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Direccion: new FormControl('', [Validators.required]),
      NombreContacto: new FormControl('', [Validators.required]),
      FonoContacto: new FormControl('', [Validators.required]),
      EmailContacto: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      MaximoUsuario: new FormControl('', [Validators.required]),
      MaximoPropiedades: new FormControl('', [Validators.required]),
      RutaFirebase: new FormControl('', [Validators.required]),
      Administrador1: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Administrador2: new FormControl('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')),
      // AdminProp1: new FormControl(''),
      // NombreProp1: new FormControl(''),
      // PropiedadSeleccionada1: new FormControl(''),
      // AdminProp2: new FormControl(''),
      // NombreProp2: new FormControl(''),
      // PropiedadSeleccionada2: new FormControl(''),
      Habilitado: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit() {
  }

  // saveComunidad() {
  //   // console.log('Pasó por newComunidad')
  //   this.comunidad.NombreComunidad = this.forma.controls.Nombre.value.toUpperCase();
  //   this.comunidad.Direccion = this.forma.controls.Direccion.value;
  //   this.comunidad.NombreContacto = this.forma.controls.NombreContacto.value.toUpperCase();
  //   this.comunidad.EmailContacto = this.forma.controls.EmailContacto.value.trim().toLowerCase();
  //   this.comunidad.FonoContacto = this.forma.controls.FonoContacto.value;
  //   this.comunidad.MaximoUsuario = this.forma.controls.MaximoUsuario.value;
  //   this.comunidad.MaximoPropiedades = this.forma.controls.MaximoPropiedades.value;
  //   this.comunidad.RutaFirebase = this.forma.controls.RutaFirebase.value.replace(/\s+/g, '');
  //   this.comunidadFire.RutaFirebase = this.forma.controls.RutaFirebase.value.replace(/\s+/g, '');
  //   this.comunidad.Habilitado = this.forma.controls.Habilitado.value;
  //   this.comunidad.Administrador1 = this.forma.controls.Administrador1.value;
  //   this.comunidad.Administrador2 = this.forma.controls.Administrador2.value;
  //   this.comunidadFire.ComandoAbrir = false;
  //   this.comunidadFire.Porton = false;
  //   this.comunidadFire.Fecha = '';
  //   this.comunidadFire.Nombre = '';
  //   console.log(this.comunidadFire.RutaFirebase);

  //   this.authService.signup(this.comunidad.Administrador1, '123456')
  //   if ( this.comunidad.Administrador2 ) {
  //     this.authService.signup(this.comunidad.Administrador2, '123456')
  //   }

  //   // this.comunidad.Role='Admin'; GodAdmin
  //   // try {
  //   //   this.comunidad.Habilitado = this.forma.controls.Habilitado.value;
  //   // } catch (error) {

  //   // }

  //   if (this.id === 0) {
  //     this.httpService.newComunidadFire(this.comunidadFire)
  //       .subscribe();
  //     this.httpService.newComunidadService(this.comunidad)
  //       .subscribe(data => {
  //         Swal.fire({
  //           title: 'Creación de comunidad',
  //           text: 'Correcto',
  //           type: 'success',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigate(['/administracion']);
  //       })
  //   } else {
  //     this.httpService.updateComunidadService(this.comunidad)
  //       .subscribe(data => {
  //         Swal.fire({
  //           title: 'Modificación de comunidad',
  //           text: 'Correcto',
  //           type: 'success',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigate(['/administracion']);
  //       })
  //   }
  //   this.resetForm();
  // }

  // resetForm() {
  //   this.forma.reset({
  //     Nombre: '',
  //     propiedadSeleccionada: 0,
  //     Email: ''
  //   })
  // }
}
