import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonViewerComponent } from './component/person-viewer/person-viewer.component';

@NgModule({
  declarations: [PersonViewerComponent],
  imports: [CommonModule],
  exports: [PersonViewerComponent],
})
export class SharedModule {}
