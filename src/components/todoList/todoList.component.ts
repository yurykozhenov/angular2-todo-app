import { Component, Input } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todo-list',
  templateUrl: './todoList.component.html',
  // styleUrls: ['./todoList.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[];
}
