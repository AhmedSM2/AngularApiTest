import { ApiPostsService } from './../services/api-posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {
  temp :any[]=[];
  photos: any[];
  constructor(private apiPhotos: ApiPostsService) {

  }

  ngOnInit() {
    this.printPhotos();
  }
  printPhotos() {

    return this.apiPhotos.getPhotos().subscribe(
      next => {
        this.photos = next;
        for (let i=0; i <20; i++) {
          this.temp.push(this.photos[i]);
        }
      }
    );
  }

}
