import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../../http/models/todo';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private httpClient: HttpClient) {}

  clean(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }

  errorSuccess(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todoss')
      .pipe(
        retry(3),
        catchError((error) => {
          console.log(error);
          return this.clean();
        })
      );
  }

  error(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todoss')
      .pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          if (error.status == 404) {
            let todo = {
              id: 1,
              userId: 1,
              title: 'title',
              completed: false,
            };
            return of([todo]);
          } else {
            return of([]);
          }
        })
      );
  }
}
