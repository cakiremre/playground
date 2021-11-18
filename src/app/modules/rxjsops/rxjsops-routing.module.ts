import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsHomeComponent } from './components/rxjs-home/rxjs-home.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { ObsComponent } from './components/obs/obs.component';
import { SubjComponent } from './components/subj/subj.component';
import { FuncComponent } from './components/func/func.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: RxjsHomeComponent },
      { path: 'obs', component: ObsComponent },
      { path: 'mttp', component: FuncComponent },
      { path: 'subject', component: SubjComponent },
      { path: 'typeahead', component: TypeaheadComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RxjsopsRoutingModule {}
