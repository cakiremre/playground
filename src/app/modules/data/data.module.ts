import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHomeComponent } from './components/data-home/data-home.component';
import { DataRoutingModule } from './data-routing.module';
import { DataGetComponent } from './components/data-get/data-get.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  Pluralizer,
} from '@ngrx/data';
import {
  entityConfig,
  defaultDataServiceConfig,
} from './models/entity-metadata';
import { MyPluralizer } from 'src/app/shared/util/pluralizer';

@NgModule({
  declarations: [DataHomeComponent, DataGetComponent],
  imports: [
    CommonModule,
    DataRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],

  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: Pluralizer, useClass: MyPluralizer },
  ],
})
export class DataModule {}
