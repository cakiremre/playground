import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { Todo } from '../../models/todo';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css'],
})
export class HttpPostComponent implements OnInit {
  post = new Post();
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  save() {
    this.postService.save(this.post).subscribe((post) => (this.post = post));
  }
}
