import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat' //dodanie modułu z bazy danych 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore' //dodanie modułu magazynu 

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent, //komponenty aplikacji
    TodoComponent //komponenty listy todo
  ],
  imports: [
    BrowserModule, //moduł wyszukiwarki
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicjalizowanie aplikacji danymi konfiguracyjnymi do bazy danych
    AngularFirestoreModule //moduł z bazydanych
  ],
  providers: [],
  bootstrap: [AppComponent] //inicjalizacja komponetow aplikacji przy pomocy biblioteki wykorzystujacej CSS
})
export class AppModule { }
