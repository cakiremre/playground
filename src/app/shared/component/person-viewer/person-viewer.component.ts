import {Component, Input, OnInit} from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.css'],
})
export class PersonViewerComponent implements OnInit {
  @Input()
  person: Person;

  @Input()
  people: Person[];

  constructor() {}
  ngOnInit(): void {}

  personClicked(p: Person){
    console.log("person clicked", p)
  }
}
