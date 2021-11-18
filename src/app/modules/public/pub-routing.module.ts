import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterLayoutComponent } from 'src/app/shared/layout/header-footer-layout/header-footer-layout.component';
import { HeaderFooterMenuLayoutComponent } from 'src/app/shared/layout/header-footer-menu-layout/header-footer-menu-layout.component';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    component: HeaderFooterLayoutComponent,
    children: [{ path: 'about', component: AboutComponent }],
  },
  {
    path: '',
    component: HeaderFooterMenuLayoutComponent,
    children: [{ path: 'contact', component: ContactComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PubRoutingModule {}
