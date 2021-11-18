import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/modules/http/models/post';

@Component({
  selector: 'app-subj',
  templateUrl: './subj.component.html',
  styleUrls: ['./subj.component.css'],
})
export class SubjComponent implements OnInit {
  post: Post = new Post();
  obs = new Subject<Post>();

  constructor() {}

  ngOnInit(): void {
    this.obs.subscribe((val) => console.log(val));
  }

  valueChange() {
    this.obs.next(this.post);
  }
}
