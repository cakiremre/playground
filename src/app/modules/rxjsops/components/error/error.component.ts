import { Component, OnDestroy, OnInit } from '@angular/core';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/modules/http/models/todo';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  constructor(private errorService: ErrorService) {}

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  ngOnInit(): void {}

  success() {
    let sucObs = this.errorService.clean();
    this.reusableSubscribeMethod(sucObs);
  }

  primary() {
    let errSucObs = this.errorService.errorSuccess();
    this.reusableSubscribeMethod(errSucObs);
  }

  error() {
    let errObs = this.errorService.error();
    this.reusableSubscribeMethod(errObs);
  }

  reusableSubscribeMethod(obs: Observable<Todo[]>) {
    let sub = obs.subscribe((todos) =>
      console.log(`Fetched ${todos.length} todos from server`)
    );
    this.subs.push(sub);
  }
}
