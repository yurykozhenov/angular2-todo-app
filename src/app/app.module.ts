import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';

import { TodosService } from '../services/todos.service';

import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from '../components/todoList/todoList.component';
import { TodoFormComponent } from '../components/todoForm/todoForm.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TodosComponent,
    TodoComponent,
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
