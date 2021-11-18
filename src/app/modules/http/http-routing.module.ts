import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { HttpDeleteComponent } from './components/http-delete/http-delete.component';
import { HttpGetComponent } from './components/http-get/http-get.component';
import { HttpHomeComponent } from './components/http-home/http-home.component';
import { HttpListComponent } from './components/http-list/http-list.component';
import { HttpPostComponent } from './components/http-post/http-post.component';

const routes: Routes = [
  {
    path: 'http',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: HttpHomeComponent },
      { path: 'list', component: HttpListComponent },
      { path: 'get/:id', component: HttpGetComponent },
      { path: 'post', component: HttpPostComponent },
      { path: 'delete/:id', component: HttpDeleteComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule {}
