import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  public submitted = false;
  @ViewChild('filePath', {static: true}) filePath: ElementRef;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new Post();
    this.createPostGroup = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(10)]),
      content: new FormControl(this.post.content, [Validators.required, Validators.minLength(10)]),
      categoryId: new FormControl(this.post.categoryId, Validators.required),
      image: new FormControl(this.post.image, Validators.required)
    });
    this.getCategories();
  }

  public submit() {
    this.submitted = true;
    if (this.createPostGroup.valid) {
      this.submitted = false;
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

  public uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }

  // calls convertBase64 to convert data into base64 formt
  public uploadPost($event): void {
    this.convertBase64($event.target, 'vendor');
  }

  // convert image file into Base64 format
  public convertBase64(inputValue: any, imageType): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
        this.post.image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }


}
