import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post.model';  
@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.css']
})
export class PostcreateComponent implements OnInit {
  enteredValue = '';  
  newPost = 'This is a Post'; 
  constructor() { }

  ngOnInit(): void {
  }
  onAddPost(){  
    this.newPost=this.enteredValue
    alert("Post is added successfully");  
  }  
  

}
