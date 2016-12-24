import { Component } from '@angular/core';

@Component({
  selector: 'tl-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName: string = 'Todo List';
}
