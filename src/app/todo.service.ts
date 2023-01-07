import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoCollection: AngularFirestoreCollection<Item>

  constructor(private afs: AngularFirestore) { 
    this.todoCollection = afs.collection<Item>("todos")
  }

  AddTodo(todo: Item){
    this.todoCollection.add(todo)
  }

  GetTodos(uid: string){
    return this.todoCollection.valueChanges({
      idField: "id"
    })
  }

  ChangeTodoStatus(id: string, done: boolean){
    this.todoCollection.doc(id).update({ done })
  }

  DeleteTodo(id: string){
    this.todoCollection.doc(id).delete()
  }
}
