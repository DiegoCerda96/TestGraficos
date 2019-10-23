import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
// import { AccesosModel } from 'app/models/accesos.model';
// import { UsuariosModel } from 'app/models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL = 'https://api.sendinblue.com/v3/smtp/statistics/reports';


  getEmailReport(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      'api-key': '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'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get('https://api.sendinblue.com/v3/smtp/statistics/reports', requestOptions)
  }


  constructor(private http: HttpClient) { }
  // Sección ABRE PORTON







}
