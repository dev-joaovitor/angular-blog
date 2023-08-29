import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/data/fakeData';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  postCover: string = ""
  postDate: string = ""
  postTitle: string = ""
  postContent: string = ""
  private id: string | null = "";

  constructor(private route: ActivatedRoute){

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get("id");
      })
      this.getValuesFromFakeData(this.id);
  }

  private getValuesFromFakeData(id: string | null) {
    const result = fakeData.filter(post => post.id.toString() === id)[0]

    if (result){
      this.postCover = result.postCover;
      this.postDate = result.postDate;
      this.postTitle = result.postTitle;
      this.postContent = result.postContent;
    }
  }
}
