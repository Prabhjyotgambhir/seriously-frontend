import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/data-models/Post';
import { PostService } from 'src/app/services/post.service';
import { Category } from 'src/app/data-models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public createPostGroup: FormGroup;
  public post: Post;
  public categories: Category[] = [];
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new Post();
    this.createPostGroup = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(10)]),
      content: new FormControl(this.post.content, [Validators.required, Validators.minLength(10)]),
      categoryId: new FormControl(this.post.categoryId, Validators.required)
    });
    this.getCategories();
  }

  public submit() {
    if (this.createPostGroup.valid) {
      this.postService.createPost(this.post).subscribe((response) => {
        this.router.navigateByUrl('admin/dashboard');
      });
    }
  }

  public getCategories() {
    this.postService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

}
