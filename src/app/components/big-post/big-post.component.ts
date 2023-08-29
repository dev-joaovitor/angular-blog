import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-post',
  templateUrl: './big-post.component.html',
  styleUrls: ['./big-post.component.css']
})
export class BigPostComponent implements OnInit{
  @Input()
  postImage: string = ''
  @Input()
  date: string = '';
  @Input()
  postTitle: string = ''
  @Input()
  postContent: string = ''
  @Input()
  postId: string = "";
  
  ngOnInit(): void {
    console.log("> Big post init");
  }
}
