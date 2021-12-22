import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];  
  constructor() { }
  getPosts(){  
    return this.posts;  
  }  
}
