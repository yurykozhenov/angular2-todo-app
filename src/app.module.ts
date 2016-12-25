import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { TodosService } from './services/todos.service';

import { TodosComponent } from './components/todos/todos.component';
import { TodoListComponent } from './components/todoList/todoList.component';
import { TodoFormComponent } from './components/todoForm/todoForm.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  providers: [
    TodosService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
