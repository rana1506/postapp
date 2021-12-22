import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts=[  
    {title: 'First Post', content:'This is the first post\'s content'},  
    {title: 'Second Post', content:'This is the second post\'s content'},  
    {title: 'Third Post', content:'This is the third post\'s content'}    
  ];  
  constructor() { }

  ngOnInit(): void {
  }

}
