import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-http-delete',
  templateUrl: './http-delete.component.html',
  styleUrls: ['./http-delete.component.css'],
})
export class HttpDeleteComponent implements OnInit, OnDestroy {
  deleteResponse: Observable<any>;
  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params) => {
        let id = params['id'];
        this.deleteResponse = this.postService.delete(1);
      })
    );
  }
}
