 import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BasedatosProvider {

  private database:SQLiteObject;
  private dbReady = new BehaviorSubject<boolean>(false); 

 
 constructor( private platform:Platform, private sqlite:SQLite) {
    
    //CREO LA BASE DE DATOS 
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name: 'todos.db',
        location: 'default'
      })
      .then((db:SQLiteObject)=>{
        this.database = db;
        
        this.createTables().then(()=>{     
          //al momento de cargar o crear las tablas establecemos el observador en true 'dbReady'
          this.dbReady.next(true);
        });
      })

    });
  }

  private createTables (){
    return this.database.executeSql(`
          CREATE TABLE  IF NOT EXISTS hato (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            active INTEGER
          );`)
          .then(()=>{
          return this.database.executeSql(`
          CREATE TABLE IF NOT EXISTS animal (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            numero INTEGER,
            especie TEXT,
            raza TEXT,
            color TEXT,
            fecha_ingreso INTEGER,
            peso_nacer, INTEGER,
            padre INTEGER,
            madre INTEGER,
            fecha_destete INTEGER,
            FOREING KEY (hatoId) REFERENCES hato(id), 
            lote INTEGER,
            marca TEXT,
            activo INTEGER,
            foto TEXT,
            observaciones TEXT
          );`)
          }).catch((err)=>{
            console.log('Error detectado al momento de crear las tablas', err);
          })
  }

  //COMPRUEBO SI LA BASE DE DATOS YA ESTA LISTA PARA INSERTAR DATOS Y LAS TABLAS ESTAN CREADAS

  private isReady(){
    return new Promise((resolve, rejet)=>{
      if(this.dbReady.getValue()){
          resolve();
          alert('Base de datos lista para insertar datos');
      }
      else {
        this.dbReady.subscribe((ready)=>{
          if(ready){
            resolve();
          }
        })
      }
    })
  }

  //CRUD
  getHatos(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql('SELECT * from hato', [])
      .then((data)=>{
        let hatos = [];
        for(let i=0; i<data.rows.length; i++){
          hatos.push(data.rows.item(i));
        }
        return hatos;
      })
    })
  }


  addHato(name:string){ 
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO hato(name)`)
    })
   }



  getHato(id:number){ }
  deleteHato(id:number){ }


  //this.crearBasedeDatos();








} 