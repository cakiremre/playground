import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Todo } from '../../models/todo';
import { PostService } from '../../services/post.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css'],
})
export class HttpPostComponent implements OnInit {
  obs : Observable<Post>;
  post = new Post();
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  save() {
    this.obs = this.postService.save(this.post);
    console.log(this.obs);
    let p: Promise<Post> = this.obs.toPromise();

    this.obs.subscribe((post) => (console.log("cb", post)));
    this.obs.subscribe((post) => (this.post = post));
  }
}
