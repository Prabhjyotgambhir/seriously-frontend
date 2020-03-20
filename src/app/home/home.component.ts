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
    this.getPostsList();
  }

  public getPostsList(): void {
    this.postService.getPosts().subscribe((response) => {
      this.postList = response;
    });
  }

}
