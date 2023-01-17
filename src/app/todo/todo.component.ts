import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})

export class TodoComponent implements OnInit {

  todos: any[] = []; //tablica dowolnego typu

  constructor(private todoService: TodoService) {}

  ngOnInit(): void { //inicjowanie danych (angular)
    this.todoService.firestoreCollection.valueChanges({ idField: 'id' }).subscribe(item => {
      this.todos = item.sort((a:any, b:any) =>  b.isDone  - a.isDone); //inicjowanie tablicy, item zawiera dane z bazy danych posortowane wedlug statusu (a i b -> parametry do porównania)
    //Jeżeli wartość > 0 wówczas sortowany jest a po b, jeśli < a przed b, a jeśli wartości są równe, wówczas zostaje taki układ jaki był
    }) //gdy za każdym razem, gdy zostanie zaktualizowana baza danych (wstawiona nowa wartosc, lub usunieta), funkcja ta zostanie wywołana
   }

  onClick(titleInput: HTMLInputElement) { //Pobranie danych z okna gdzie wpisywany jest tytul gry
    if (titleInput.value) { //gdy tylko pojawi się nowa wartość w polu tekstowym
      this.todoService.addTodo(titleInput.value); //tworzenie nowego zadania w aplikacji
      titleInput.value = ""; //czyszczenie pola tekstowego
  }
}

onStatusChange(id: string, newStatus: boolean) { //zmiana statusu (wykonane - niewykonane, niewykonane - wykonane)
  this.todoService.updateTodoStatus(id, newStatus); //aktualizacja statusu na serwerze Google firebase
}

onDelete(id:string){ //usuwanie zadania
  this.todoService.deleteTodo(id); //usuwanie z serwera Google firebase
}

}
