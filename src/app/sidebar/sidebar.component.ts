import { Component } from '@angular/core';

import { CountService } from '../count.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private countService: CountService) { }



  getCount() {
    return this.countService.count;
  }

}
