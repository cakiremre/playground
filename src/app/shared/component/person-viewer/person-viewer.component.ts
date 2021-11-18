import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.css'],
})
export class PersonViewerComponent implements OnInit {
  person: Person = {
    firstName: 'Emre',
    lastName: 'Cakir',
    age: 35,
  };

  constructor() {}

  ngOnInit(): void {}
}
