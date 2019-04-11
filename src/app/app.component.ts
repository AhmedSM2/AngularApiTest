import { ApiPostsService } from './services/api-posts.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshopV1';
  posts:any[];
  constructor(){
  }

 
}
