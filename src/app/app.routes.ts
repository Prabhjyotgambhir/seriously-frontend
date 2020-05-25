import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { CoronaComponent } from './corona/corona.component';
import { CreateBannerComponent } from './admin/create-banner/create-banner.component';
import { PostListComponent } from './post-list/post-list.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'corona', component: CoronaComponent},
    { path: 'post-detail/:id', component: PostDetailComponent},
    { path: 'post-list', component: PostListComponent},
    { path: 'about-me', component: AboutmeComponent},
    { path: 'admin', component: LoginComponent},
    { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'admin/dashboard/create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
    { path: 'admin/dashboard/create-banner', component: CreateBannerComponent, canActivate: [AuthGuard]},
];
