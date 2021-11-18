import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventHomeComponent } from './components/event-home/event-home.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'event',
    component: HeaderLayoutComponent,
    children: [{ path: '', component: EventHomeComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
