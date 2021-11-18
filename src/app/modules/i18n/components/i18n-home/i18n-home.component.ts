import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-i18n-home',
  templateUrl: './i18n-home.component.html',
  styleUrls: ['./i18n-home.component.css'],
})
export class I18nHomeComponent implements OnInit {
  message: string;
  selected: string = 'tr';
  langs: Array<string> = ['tr', 'en'];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService
      .get('HELLO', { value: 'FROM TS' })
      .subscribe((msg) => (this.message = msg));
  }

  onChange() {
    this.translateService.use(this.selected);
    this.translateService
      .get('HELLO', { value: 'FROM TS' })
      .subscribe((msg) => (this.message = msg));
  }
}
