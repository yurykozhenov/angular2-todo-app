import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todoList.component.html',
  // styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent {
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
  @Input() todos: Todo[];

  onComplete(todo: Todo) {
    this.complete.emit(todo);
  }

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
