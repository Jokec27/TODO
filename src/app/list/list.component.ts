import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Observable<Item[]>

  constructor(private todoService: TodoService, private authService: AuthService) { 
    this.items = this.todoService.GetTodos(authService.uid)
  }

  ngOnInit(): void {
  }

}
