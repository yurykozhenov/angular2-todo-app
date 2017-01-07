import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';

export const appRoutes =  [
  { path: 'todos', component: TodosComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
