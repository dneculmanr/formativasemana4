import { Injectable } from '@angular/core';

import { Capacitor } from "@capacitor/core";

export interface Persona {
  rut: string;
  nombre: string;
  apellidop: string;
  apellidom: string;
  direccion: string;
  comuna: string;
  region: string;
}


@Injectable({
  providedIn: 'root',
})
export class SqliteService {
  private dbName = 'personas.db';
  private tableName = 'personas';

  private SQLiteConnection?: any;
  private CapacitorSQLite?: any;
  private db?: any ;

  constructor() { }

  async insertarPersona(p: Persona):Promise<void>{

    


  }


}



