import { Component } from '@angular/core';

@Component({
  selector: 'tl-app',
  template: `
    <main class="container">
      <div class="page-header">
        <h1 class="text-center">Angular 2 Todo App</h1>
      </div>
      <a routerLink="/todos">Heroes</a>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {

}
