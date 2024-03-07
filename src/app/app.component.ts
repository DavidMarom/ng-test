import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = '';
  array = [];

  constructor(private http: HttpClient) { }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://ng-test-cb189-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }


  onInput(event: Event) {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
