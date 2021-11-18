import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Person } from '../../models/person';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css'],
})
export class ObsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const person: Person = {
      name: 'Emre Cakir',
      age: 35,
    };

    const personObs: Observable<Person> = of(person);
    const personPromise: Promise<Person> = Promise.resolve(person);
    const personObservable: Observable<Person> = from(personPromise);

    personObs.subscribe((data) => console.log(data));
  }
}
