import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubRoutingModule } from './pub-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, PubRoutingModule, SharedModule],
})
export class PubModule {}
