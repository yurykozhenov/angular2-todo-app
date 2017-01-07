import { Component, OnInit } from '@angular/core';

import { TodosService } from '../../services/todos.service';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  // styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  get sortedTodos(): Todo[] {
    return this.todos
      .sort((prev, current) => new Date(prev.createdAt) < new Date(current.createdAt) ? 1 : -1);
  }

  get uncompletedTodos(): Todo[] {
    return this.sortedTodos
      .filter(todo => !todo.completed);

  }

  get completedTodos(): Todo[] {
    return this.sortedTodos
      .filter(todo => todo.completed);
  }

  constructor(
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todosService.getTodos()
      .then(todos => {
        this.todos = todos;
      });
  }

  completeTodo(todo: Todo) {
    this.todosService.completeTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }
}
