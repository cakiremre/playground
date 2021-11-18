import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimHomeComponent } from './components/anim-home/anim-home.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimPage1Component } from './components/anim-page1/anim-page1.component';
import { AnimPage2Component } from './components/anim-page2/anim-page2.component';
import { AnimPage3Component } from './components/anim-page3/anim-page3.component';

const routes: Routes = [
  {
    path: 'anim',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: AnimHomeComponent, data: { tabIndex: '0' } },
      {
        path: 'page1',
        component: AnimPage1Component,
        data: { tabIndex: '1' },
      },
      {
        path: 'page2',
        component: AnimPage2Component,
        data: { tabIndex: '2' },
      },
      {
        path: 'page3',
        component: AnimPage3Component,
        data: { tabIndex: '3' },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AnimRoutingModule {}
