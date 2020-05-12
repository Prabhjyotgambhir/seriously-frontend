import { Component, OnInit } from '@angular/core';
import { Post } from '../data-models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-must-read',
  templateUrl: './must-read.component.html',
  styleUrls: ['./must-read.component.scss']
})
export class MustReadComponent implements OnInit {
  mustRead: Post[] = [] ;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPopularPost(4, 0).subscribe((response) => {
      this.mustRead = response;
    });
  }

}
