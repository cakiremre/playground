import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecRoutingModule } from './sec-routing.module';
import { SecHomeComponent } from './components/sec-home/sec-home.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SecHomeComponent, UserComponent],
  imports: [
    CommonModule,
    SecRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
})
export class SecModule {}
