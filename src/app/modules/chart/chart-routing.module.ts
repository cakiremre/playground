import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChartHomeComponent } from './components/chart-home/chart-home.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';

const routes: Routes = [
  {
    path: 'chart',
    component: HeaderLayoutComponent,
    children: [{ path: '', component: ChartHomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
