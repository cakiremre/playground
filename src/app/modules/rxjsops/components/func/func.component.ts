import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, fromEvent, Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  share,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { Post } from 'src/app/modules/http/models/post';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css'],
})
export class FuncComponent implements OnInit {
  map: Observable<string>;
  tap: Observable<string>;

  faSpinner = faSpinner;
  loading: boolean = false;

  searchTerm: string;

  obs = new Subject<string>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    const source = of('emre');

    this.tap = source.pipe(
      tap((val) => {
        val = val.toUpperCase();
        console.log("tap", val); // this prints uppercase to console / lowercase to window
      })
    );

    this.map = source.pipe(map((val) => {
      console.log("in map", val);
      return val.toUpperCase();
    }));


    const request = this.getPosts();
    this.setLoadingSpinner(request);
    request.subscribe((data) => {
      console.log(data);
    });

    this.obs
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((val) => console.log(val));
  }

  setLoadingSpinner(observable: Observable<any>) {
    this.loading = true;
    observable.subscribe(() => (this.loading = false));
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(share());
  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  run() {
    const postsObs = this.getPosts();
    const commentObs = this.getComments();

    const combined = postsObs.pipe(
      switchMap((posts) => {
        return commentObs.pipe(
          tap((comments) => {
            console.log('comments', comments);
            console.log('posts', posts);
          })
        );
      })
    );
    combined.subscribe();
  }

  onChange() {
    this.obs.next(this.searchTerm);
  }

  takeRun() {
    const source = fromEvent(document, 'click');
    source.pipe(take(4)).subscribe(() => console.log('Clicked!'));
  }

  forkJoin() {
    forkJoin([this.getPosts(), this.getComments()]).subscribe((data) => {
      console.log('post count: ', data[0].length);
      console.log('comment count: ', data[1].length);
    });
  }
}
