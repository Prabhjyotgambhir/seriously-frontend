import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Post } from '../data-models/Post';
import { HttpClient } from '@angular/common/http';
import { appUrl } from '../shared/constant';
import { Post } from '../data-models/Post';
import { Category } from '../data-models/category';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(appUrl + 'posts');
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
}
