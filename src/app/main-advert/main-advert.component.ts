import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { PostService } from '../services/post.service';
import { Banner } from '../data-models/banner';

@Component({
  selector: 'app-main-advert',
  templateUrl: './main-advert.component.html',
  styleUrls: ['./main-advert.component.scss']
})
export class MainAdvertComponent implements OnInit {
  public slides: Banner[] = [];
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(private postService: PostService) {
   }

  ngOnInit() {
    this.postService.getBanner(3, 0).subscribe((response) => {
      this.slides = response;
    });
  }

}
