import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Category } from '../data-models/category';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.scss']
})
export class CategorySectionComponent implements OnInit {
  public categories: Category[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(): void {
    this.postService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

}
