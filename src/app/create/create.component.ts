import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  text: string = "";

  Save(){
    const todo: Item = { 
      done: false,
      text: this.text,
      uid: this.authService.uid
    }
    this.todoService.AddTodo(todo)
  }

  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
