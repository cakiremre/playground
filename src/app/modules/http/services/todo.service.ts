import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  BASE_URL = `https://jsonplaceholder.typicode.com`;
  TODO_URL = {
    todos: `${this.BASE_URL}/todos`,
    by_id: (id: number) => `${this.BASE_URL}/todos/${id}`,
  };

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.TODO_URL.todos);
  }

  get(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.TODO_URL.by_id(id));
  }
}
