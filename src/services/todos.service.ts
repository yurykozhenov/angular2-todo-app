import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {

  private todos: Todo[];

  constructor(
    private http: Http
  ) {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }

  getTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {

      if (!this.todos) {

        this.http.get('mocks/todos.json')
          .toPromise()
          .then(response => response.json() as Todo[])
          .then(todos => {
            this.todos = todos;
            this.setTodos();

            resolve(this.todos);
          })
          .catch(err => {
            reject(err);
          });

      } else {
        resolve(this.todos);
      }

    });
  }

  getTodo(id: number): Todo {
    return this.todos[id];
  }

  addTodo(todo: Todo) {
    todo.createdAt = new Date();
    todo.completed = false;

    this.todos.push(todo);

    this.setTodos();
  }

  private setTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
