import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from '../data-models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public postList: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPostsList(4, 1);
  }

  public getPostsList(limit: number, page: number): void {
    this.postService.getPosts(4, 1).subscribe((response) => {
      this.postList = response;
    });
  }

}
