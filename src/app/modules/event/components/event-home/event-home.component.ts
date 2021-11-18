import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modules/http/models/post';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.css'],
})
export class EventHomeComponent implements OnInit {
  post: Post;
  constructor() {}

  ngOnInit(): void {}

  onClick(post: Post) {
    this.post = post;
  }
}
