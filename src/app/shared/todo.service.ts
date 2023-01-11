import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore' //aby wstawić tytuł do bazy daynch

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: AngularFirestore) { }
}
