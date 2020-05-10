import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestInterceptor } from '../shared/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../shared/auth.guard';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreateBannerComponent } from './create-banner/create-banner.component';



@NgModule({
  declarations: [LoginComponent, DashboardComponent, CreatePostComponent, CreateBannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
  },
  ]
})
export class AdminModule { }
