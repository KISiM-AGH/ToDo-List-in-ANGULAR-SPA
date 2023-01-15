import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore' //aby wstawić tytuł do bazy danych - druga klasa reprezentuje kolecje magazynu plikow

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestoreCollection : AngularFirestoreCollection; //zapisywanie 
  constructor(private firestore: AngularFirestore) {  //chodzimy w interakcje z Firebase
    this.firestoreCollection = firestore.collection('todos'); //odniesienie do kolekcji
  }


  addTodo(title: string) { //dodanie tytuły gry z pola textowego do bazy
    this.firestoreCollection.add( { //wypisanie rzeczy dodawanych do bazy danych: tytuł gry, stan wykonania zadania(domyślnie nie)
      title,
      isDone : false 
    })
  }
}
