import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from 'src/app/shared/layout/header-layout/header-layout.component';
import { SecHomeComponent } from './components/sec-home/sec-home.component';
import { UserComponent } from './components/user/user.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { Role } from './models/account';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'security',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: SecHomeComponent },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {
          expected: Role.ROLE_USER,
        },
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: {
          expected: Role.ROLE_ADMIN,
        },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SecRoutingModule {}
