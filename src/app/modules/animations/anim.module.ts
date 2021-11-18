import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimHomeComponent } from './components/anim-home/anim-home.component';
import { AnimRoutingModule } from './anim-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimPage1Component } from './components/anim-page1/anim-page1.component';
import { AnimPage2Component } from './components/anim-page2/anim-page2.component';
import { AnimPage3Component } from './components/anim-page3/anim-page3.component';

@NgModule({
  declarations: [
    AnimHomeComponent,
    AnimPage1Component,
    AnimPage2Component,
    AnimPage3Component,
  ],
  imports: [
    CommonModule,
    AnimRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class AnimModule {}
