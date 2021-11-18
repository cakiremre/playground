import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { I18nHomeComponent } from './components/i18n-home/i18n-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'i18n',
    component: HeaderLayoutComponent,
    children: [{ path: '', component: I18nHomeComponent }],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class I18nRoutingModule {}
