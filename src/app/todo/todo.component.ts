import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TodosService } from '../../services/todos.service';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  // styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    // this.route.params
    //   .toPromise()
    //   .then((params: Params) => {
    //     return this.todosService.getTodo(Number(params['id']));
    //   })
    //   .then(todo => {
    //     this.todo = todo;
    //   });

    this.route.params
      .switchMap((params: Params) => this.todosService.getTodo(+params['id']))
      .subscribe(todo => this.todo = todo);
  }

  completeTodo(todo: Todo) {
    this.todosService.completeTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }
}
