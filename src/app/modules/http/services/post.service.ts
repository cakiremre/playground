import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL = `https://jsonplaceholder.typicode.com`;
  POST_URL = {
    save: `${this.BASE_URL}/posts`,
    delete: (id: number) => {
      return `${this.BASE_URL}/posts/${id}`;
    },
  };

  post: Post[] = [];

  constructor(private httpClient: HttpClient) {}

  save(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.POST_URL.save, post);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.POST_URL.delete(id), {
      observe: 'response',
    });
  }
}
