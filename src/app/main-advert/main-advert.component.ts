import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-advert',
  templateUrl: './main-advert.component.html',
  styleUrls: ['./main-advert.component.scss']
})
export class MainAdvertComponent implements OnInit {
  public slides = [{
    src: 'https://blog.hubspot.com/hubfs/remote-work-tips.jpg',
  },
  {
    src: 'https://www.uprightcommunications.com/wp-content/uploads/2019/07/Why-isnt-my-business-blog-working.jpg',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoBLrTGLzMljN3UQhg8buM9mADo8ISWOO2dSdYUDa66DeFM7yE',
  }
  ];

  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor() {
   }

  ngOnInit() {
  }

}
