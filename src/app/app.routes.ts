import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';

export const appRoutes =  [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
