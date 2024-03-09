import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CountService } from '../count.service';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrl: './page01.component.css',
  // imports: [MatCardModule],
})



export class Page01Component {
  constructor(
    private http: HttpClient,
    private countService: CountService) { }

  isChecked: false;

  increase() {
    this.countService.increase();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://ng-test-cb189-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

}
