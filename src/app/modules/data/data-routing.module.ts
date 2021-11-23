import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataHomeComponent } from './components/data-home/data-home.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DataGetComponent } from './components/data-get/data-get.component';

const routes: Routes = [
  {
    path: 'data',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: DataHomeComponent },
      { path: 'get', component: DataGetComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
