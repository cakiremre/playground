import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsopsRoutingModule } from './rxjsops-routing.module';
import { RxjsHomeComponent } from './components/rxjs-home/rxjs-home.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ObsComponent } from './components/obs/obs.component';
import { FormsModule } from '@angular/forms';
import { SubjComponent } from './components/subj/subj.component';
import { FuncComponent } from './components/func/func.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RxjsHomeComponent,
    TypeaheadComponent,
    ObsComponent,
    SubjComponent,
    FuncComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RxjsopsRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
})
export class RxjsopsModule {}
