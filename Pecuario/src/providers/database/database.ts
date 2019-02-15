import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(
    public http: Http,
    public storage: SQLite
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "prueba.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE hatos (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT, activo CHAR(1))",[])
        db.executeSql("CREATE TABLE animals (id INTEGER PRIMARY KEY AUTOINCREMENT, numeroA INTEGER, marca INTEGER, especie TEXT, raza TEXT, fechaIngreso DATE,"+
        "peso INTEGER, sexo CHAR(1), color TEXT),", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  
  //HATOS
  CreateHato(nombre:string, descripcion:string, activo:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO hatos (nombre, descripcion, activo) VALUES (?, ?, ?)";
      this.db.executeSql(sql, [nombre, descripcion, activo]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }
  GetAllHatos(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM hatos order by id desc", []).then((data) => {
        let arrayHato = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayHato.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              descripcion: data.rows.item(i).descripcion,
              activo: data.rows.item(i).activo

            });            
          }          
        }
        resolve(arrayHato);
      }, (error) => {
        reject(error);
      })
    })
  }

  GetHato(id:number){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM hatos where id = ?", []).then((data) => {
        let arrayHato = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayHato.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              descripcion: data.rows.item(i).descripcion,
              activo: data.rows.item(i).activo
            });            
          }          
        }
        resolve(arrayHato);
      }, (error) => {
        reject(error);
      })
    })
  }


  //ANIMALES
  CreateAnimal(marca: number, numeroA: number, especie:string, raza:string, fechaIngreso:Date,peso:number, sexo:string, lote:string){
    return new Promise ((resolve, reject) => {
      let sql = "INSERT INTO animals (marca, numeroA, especie, raza, fechaIngreso, peso, sexo, lote) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      this.db.executeSql(sql, [marca, numeroA, especie, raza, fechaIngreso, peso, sexo, lote]).then((data) =>{
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  GetAllAnimals(){
    return new Promise ((resolve, reject) => {
      this.db.executeSql("SELECT * FROM animals", []).then((data) => {
        let arrayAnimal = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            arrayAnimal.push({
              id: data.rows.item(i).id,
              numeroA: data.rows.item(i).numeroA,
              marca: data.rows.item(i).marca,
              especie: data.rows.item(i).especie,
              raza: data.rows.item(i).raza,
              fechaIngreso: data.rows.item(i).fechaIngreso,
              peso: data.rows.item(i).peso,
              sexo: data.rows.item(i).sexo,
              lote: data.rows.item(i).lote

            });            
          }          
        }
        resolve(arrayAnimal);
      }, (error) => {
        reject(error);
      })
    })
  }

  DeleteUser(idUser){
    
  }

}
