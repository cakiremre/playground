import { Plural } from '@angular/common';
import { Pluralizer } from '@ngrx/data';

export class MyPluralizer extends Pluralizer {
  pluralize(name: string): string {
    return name;
  }
}
