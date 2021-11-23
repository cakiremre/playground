import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Todo } from '../../http/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoEntityService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todos', serviceElementsFactory);
  }
}
