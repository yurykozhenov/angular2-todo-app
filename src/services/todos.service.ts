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

    if (!this.currentTopId) {
      this.currentTopId = 0;
    }
  }

  getTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {

      if (!this.todos) {
        // If it's initial app run, load some mock data

        this.loadTodos()
          .then(todos => resolve(this.todos))
          .catch(err => reject(err));

      } else {
        resolve(this.todos);
      }

    });
  }

  getTodo(id: number): Promise<Todo> {
    return new Promise<Todo>((resolve, reject) => {
      const todo = this.todos.find(todo => todo.id === id);

      if (todo) {
        resolve(todo);
      } else {
        reject({ message: `Todo item with id ${id} does not exist!`});
      }
    });
  }

  addTodo(todo: Todo) {
    todo.title = todo.title.trim();
    todo.description = todo.description.trim();
    todo.createdAt = new Date();
    todo.completed = false;

    this.incrementTopId();
    todo.id = this.currentTopId;

    this.todos.push(todo);

    this.saveTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.getTodoIndex(todo), 1);

    this.saveTodos();
  }

  completeTodo(todo: Todo) {
    this.findTodo(todo).completed = true;

    this.saveTodos();
  }

  private findTodo(todo: Todo): Todo {
    return this.todos[this.getTodoIndex(todo)];
  }

  private getTodoIndex(todo: Todo): number {
    return this.todos.findIndex(todoInTodos => todoInTodos.id === todo.id);
  }

  private loadTodos(): Promise<Todo[]> {
    return this.http.get('mocks/todos.json')
      .toPromise()
      .then(response => response.json() as Todo[])
      .then(todos => {
        this.todos = todos;
        this.currentTopId = todos.length - 1;
        localStorage.setItem('todosCurrentTopId', JSON.stringify(this.currentTopId));
        this.saveTodos();

        return todos;
      });
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private incrementTopId() {
    this.currentTopId++;
    localStorage.setItem('todosCurrentTopId', JSON.stringify(this.currentTopId));
  }
}
