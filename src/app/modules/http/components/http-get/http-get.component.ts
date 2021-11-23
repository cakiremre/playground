import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css'],
})
export class HttpGetComponent implements OnInit, OnDestroy {
  todo: Todo;
  todoObs: Observable<Todo>;

  subscriptions: Array<Subscription> = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  ngOnInit(): void {
    // TODO share() çalıştı mı?
    this.subscriptions.push(
      this.todoService
        .get(this.activatedRoute.snapshot.params.id)
        .subscribe((todo) => (this.todo = todo))
    );

    this.todoService
      .get(this.activatedRoute.snapshot.params.id)
      .subscribe((t) => console.log(t));
  }
}
