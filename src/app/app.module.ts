import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainAdvertComponent } from './main-advert/main-advert.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { PostCardComponent } from './post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/material/material.module';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TodayContentComponent } from './today-content/today-content.component';
import { ShortAboutMeComponent } from './short-about-me/short-about-me.component';
import { MustReadComponent } from './must-read/must-read.component';
import { ExploreMoreComponent } from './explore-more/explore-more.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { InstagramSectionComponent } from './instagram-section/instagram-section.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { CoronaComponent } from './corona/corona.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
// import { GoogleChartsModule } from 'angular-google-charts';
import { DisqusModule } from 'ngx-disqus';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainAdvertComponent,
    PostCardComponent,
    PostDetailComponent,
    MidSectionComponent,
    MainContentComponent,
    TodayContentComponent,
    ShortAboutMeComponent,
    MustReadComponent,
    ExploreMoreComponent,
    CategorySectionComponent,
    InstagramSectionComponent,
    CoronaComponent,
    FooterComponent,
    PostListComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    SwiperModule,
    HttpClientModule,
    AdminModule,
    MaterialModule,
    AngularFontAwesomeModule,
    NgxMasonryModule,
    DisqusModule.forRoot('http-localhost-4200-a8xho3bvxl')

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
