import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

  private dbPath = '/repartidores';
  repartidoresColecction: AngularFirestoreCollection<Repartidor>;
  public repartidor: Observable<Repartidor[]>;

  constructor(public db: AngularFirestore) { 
    this.repartidoresColecction = db.collection(this.dbPath);

    this.repartidor = this.repartidoresColecction.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data() as unknown as Repartidor;
        return data;
      });
    }));
  }

  altaRepartidor(repartidor : Repartidor){
    return this.repartidoresColecction.add(JSON.parse( JSON.stringify(repartidor)));
  }

  traerTodos(){
    return this.repartidor;
  }
}