import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {

  private todos: Todo[];
  private currentTopId: number;

  constructor(
    private http: Http
  ) {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.currentTopId = JSON.parse(localStorage.getItem('todosCurrentTopId'));
  }

  getTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {

      if (!this.todos) {
        // If it's initial app run, load some mock data

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
    todo.id = this.currentTopId + 1;
    todo.createdAt = new Date();
    todo.completed = false;

    this.todos.push(todo);

    this.setTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.findIndex(todoInTodos => todoInTodos.id === todo.id), 1);

    this.setTodos();
  }

  private setTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.currentTopId = this.todos.length ? this.todos[this.todos.length - 1].id : 0;
    localStorage.setItem('todosCurrentTopId', JSON.stringify(this.currentTopId));
  }
}
