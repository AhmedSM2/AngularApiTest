import { ApiPostsService } from './../services/api-posts.service';
import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {
  temp :any[]=[];

  posts:any[]=[];
  constructor(private apiPost:ApiPostsService){
  }

  ngOnInit() {
    this.printPosts();
  }
 
  printPosts(){
    this.apiPost.getPosts().subscribe(
      (next)=>{
        this.posts = next;
        for (let i=0; i <20; i++) {
          this.temp.push(this.posts[i]);
        }
      }
    );
  }
  
}


/* print(){
    let temp :any=[];
    for (let i=0; i <20; i++) {
      temp.push(this.posts[i]);
    }
    console.log(temp);
  }
  */