import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Post } from '../data-models/Post';
import { HttpClient } from '@angular/common/http';
import { appUrl } from '../shared/constant';
import { Post } from '../data-models/Post';
import { Category } from '../data-models/category';
import { Banner } from '../data-models/banner';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public todaysPost: Post;
  constructor(private httpClient: HttpClient) { }

  // Fetches whether the todayPost is tile/grid
  get todayPost(): Post {
    return this.todaysPost;
  }

  // Sets the todayPost to tile/grid
  set todayPost(state: Post) {
    this.todaysPost = state;
  }

  getPosts(limit: number, page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${appUrl}posts?limit=${limit}&page=${page}`);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(appUrl + `posts/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(appUrl + 'posts', post);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(appUrl + 'category');
  }

  getCovidData(): Observable<any> {
    return this.httpClient.get<any>(appUrl + 'posts/covid');
  }

  getPopularPost(limit: number, page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(appUrl + `posts/popular?limit=${limit}&page=${page}`);
  }


  // Banner code

  createBanner(banner: Banner): Observable<Banner> {
    return this.httpClient.post<Post>(appUrl + 'banner', banner);
  }

  getBanner(limit: number, page: number): Observable<Banner[]> {
    return this.httpClient.get<Post[]>(`${appUrl}banner?limit=${limit}&page=${page}`);
  }

}
