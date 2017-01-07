import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../../customValidators';

import { TodosService } from '../../services/todos.service';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'tl-todo-form',
  templateUrl: './todoForm.component.html',
  // styleUrls: ['./todoForm.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.todoForm = this.fb.group({
      title: ['', [CustomValidators.required, Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(250)]]
    });
  }

  onSubmit($event: any, todo: Todo) {
    $event.preventDefault();
    this.todosService.addTodo(todo);
    this.buildForm();
  }
}
