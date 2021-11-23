import { Component, OnInit } from '@angular/core';
import { ToastrComponentlessModule } from 'ngx-toastr';
import { Todo } from 'src/app/modules/http/models/todo';
import { TodoEntityService } from '../../services/todo-entity.service';

@Component({
  selector: 'app-data-get',
  templateUrl: './data-get.component.html',
  styleUrls: ['./data-get.component.css'],
})
export class DataGetComponent implements OnInit {
  constructor(private todoService: TodoEntityService) {}

  ngOnInit(): void {
    this.todoService.getByKey(1).subscribe((todo) => console.log(todo));
    this.todoService.getAll().subscribe((todos: Todo[]) => console.log(todos));
  }
}
