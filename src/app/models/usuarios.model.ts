import { PropiedadesModel } from './propiedades.model';

export class UsuariosModel {
    Id: number;
    IdPropiedad: number;
    IdComunidad: number;
    Role: string;
    Nombre: string;
    Email: string;
    IMEI: number;
    comunidade: any;
    propiedade: PropiedadesModel;
    NumeroCasa: any;
    UltimoLogin: any;
    Habilitado: boolean;

    // constructor(){
    //     this.estado = true;
    //     this.tipoServicio = 'Instalación'
    // }
}