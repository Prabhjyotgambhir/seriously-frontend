import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../data-models/Post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public postList: Post[] = [];
  constructor(private postService: PostService, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getPostsList(5, 0);
  }

  public getPostsList(limit: number, page?: number): void {
    this.postService.getPosts(limit, page).subscribe((response) => {
      this.postList = response;
      this.postList.find((post) => {
        const todaysDate = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
        const postDate = this.datepipe.transform(new Date(post.createdAt), 'MM/dd/yyyy');
        if (todaysDate === postDate) {
          this.postService.todaysPost = post;
        }
      });
    });
  }

}
