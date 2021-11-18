import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventHomeComponent } from './components/event-home/event-home.component';
import { EventRoutingModule } from './event-routing.module';
import { SubComponent } from './components/sub/sub.component';

@NgModule({
  declarations: [EventHomeComponent, SubComponent],
  imports: [CommonModule, EventRoutingModule],
})
export class EventModule {}
