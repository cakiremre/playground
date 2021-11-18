import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from 'src/app/modules/http/models/post';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  @Output()
  action: EventEmitter<any> = new EventEmitter();

  post: Post = {
    id: 1,
    userId: 1,
    title: 'hello',
    body: 'my-body',
  };

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.action.emit(this.post);
  }
}
