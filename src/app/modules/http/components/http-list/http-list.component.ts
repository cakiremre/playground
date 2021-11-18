import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-http-list',
  templateUrl: './http-list.component.html',
  styleUrls: ['./http-list.component.css'],
})
export class HttpListComponent implements OnInit, OnDestroy {
  selected = 0;
  todos: Todo[] = [];
  selectedTodos: Todo[] = [];
  subscription: Subscription;

  columns = [
    { name: 'ID' },
    { name: 'UserID' },
    { name: 'Title' },
    { name: 'Completed' },
  ];

  constructor(private todoService: TodoService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.todoService
      .list()
      .subscribe((todos) => (this.todos = todos));
  }

  selectTab(idx: number): void {
    this.selected = idx;
  }
}
