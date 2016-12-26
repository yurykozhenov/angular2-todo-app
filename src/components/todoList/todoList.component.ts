import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todoList.component.html',
  // styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent {
  @Output() delete = new EventEmitter<any>();
  @Input() todos: Todo[];

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
