import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = {
    text: '',
    done: false,
    id: ''
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  DeleteTodo(){
    if(this.item.id) this.todoService.DeleteTodo(this.item.id)
  }

  ChangeStatus(){
    this.item.done = !this.item.done
    if(this.item.id)this.todoService.ChangeTodoStatus(this.item.id, this.item.done)
  }

}
