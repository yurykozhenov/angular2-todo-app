import { Component } from '@angular/core';

@Component({
  selector: 'tl-app',
  template: `
    <main class="container">
      <div class="page-header">
        <h1 class="text-center">Angular 2 Todo App</h1>
      </div>
      <tl-todos></tl-todos>
    </main>
  `
})
export class AppComponent {

}
