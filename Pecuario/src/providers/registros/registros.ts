//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class RegistrosProvider {

  db: SQLiteObject = null



  constructor(/*public http: HttpClient*/) {
    console.log('Hello RegistrosProvider Provider');
  }
setDatabase(db: SQLiteObject){
  if(this.db===null){
    this.db = db;
  }
}

createTables(){
  let sql = 'CREATE TABLE IF NOT EXISTS animal(id INTEGER PRIMARY KEY AUTOINCREMENT, numero_animal NUMBER, especie TEXT )';
  return this.db.executeSql(sql, []);
}

//CONSULTA
getRegistros(){
  let sql = 'SELECT * FROM animal'
  return this.db.executeSql(sql, [])
    .then( respuesta => {   
      let registros =[];
      for (let i=0; i<respuesta.rows.length; i++){
        registros.push(respuesta.rows.item(i));
      }
      return Promise.resolve
    })
    .catch( error =>{
      Promise.reject(error);
    });
}

//ADD
addRegistros(registro:any) {
  let sql = 'INSERT INTO animal(numero_animal, especie) VALUES(?,?)'
  return this.db.executeSql(sql,[registro.numero_animal, registro.especie]);
}

//UPDATE
upDate(registro:any){
  let sql = 'UPDATE animal set numero_animal = ?, especie = ? WHERE id =?';
  return this.db.executeSql(sql, [registro.numero_animal, registro.especie, registro.id]);
}

//DELETE
deleteRegistros(registro:any){
  let sql = 'DELETE FROM animal where id = ?';
  return this.db.executeSql(sql,[registro.id]);
}





}
