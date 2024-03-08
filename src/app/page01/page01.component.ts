import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrl: './page01.component.css',
  // imports: [MatCardModule],
})



export class Page01Component {
isChecked: false;

  constructor(private http: HttpClient) { }
  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://ng-test-cb189-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
