import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-post',
  templateUrl: './small-post.component.html',
  styleUrls: ['./small-post.component.css']
})
export class SmallPostComponent implements OnInit {
  @Input()
  profilePicture: string = '';
  @Input()
  postDate: string = '';
  @Input()
  postTitle: string = ''
  @Input()
  postContent: string = ''
  @Input()
  postId: string = ''

  ngOnInit() {
    console.log("> Small post init");
  }
}
