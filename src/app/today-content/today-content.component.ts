import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../data-models/Post';

@Component({
  selector: 'app-today-content',
  templateUrl: './today-content.component.html',
  styleUrls: ['./today-content.component.scss']
})
export class TodayContentComponent implements OnInit {
  public post: Post;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.todayPost;
  }

}
