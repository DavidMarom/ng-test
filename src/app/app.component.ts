import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = '';
  array = [];

  onAdd() {
    this.array.push(this.data);
    this.data = '';
  }

  onInput(event: Event) {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
