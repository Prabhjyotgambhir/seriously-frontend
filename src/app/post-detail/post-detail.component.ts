import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../data-models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post: Post;
  public pageId = '/post-detail';
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.getPostById(id);
    });
  }

  public getPostById(id: number) {
    this.postService.getPostById(id).subscribe((response) => {
      this.post = response;
    });
  }

}
