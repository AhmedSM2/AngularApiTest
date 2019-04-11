import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/observable";``
import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class ApiPostsService {

  constructor(private __http:Http) {
   
   }
   getPosts(){
    return this.__http.get("https://jsonplaceholder.typicode.com/posts")
     .map(result=> result.json());
   }
   getPhotos(){
    return this.__http.get("https://jsonplaceholder.typicode.com/photos")
    .map(result=> result.json());
   }
}
