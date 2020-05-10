import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/data-models/Post';
import { PostService } from 'src/app/services/post.service';
import { Category } from 'src/app/data-models/category';
import { Router } from '@angular/router';
import { Banner } from 'src/app/data-models/banner';

@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.component.html',
  styleUrls: ['./create-banner.component.scss']
})
export class CreateBannerComponent implements OnInit {
  public createBannerGroup: FormGroup;
  public banner: Banner;
  public categories: Category[] = [];
  public submitted = false;
  @ViewChild('filePath', {static: true}) filePath: ElementRef;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.banner = new Banner();
    this.createBannerGroup = new FormGroup({
      title: new FormControl(this.banner.title, [Validators.required, Validators.minLength(10)]),
      categoryId: new FormControl(this.banner.categoryId, Validators.required),
      image: new FormControl(this.banner.image, Validators.required)
    });
    this.getCategories();
  }

  public submit() {
    this.submitted = true;
    if (this.createBannerGroup.valid) {
      this.submitted = false;
      this.postService.createBanner(this.banner).subscribe(() => {
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
        this.banner.image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }


}
