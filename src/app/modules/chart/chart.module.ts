import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRoutingModule } from './chart-routing.module';

import * as echarts from 'echarts';
import { ChartHomeComponent } from './components/chart-home/chart-home.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChartHomeComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgxEchartsModule.forRoot({ echarts }),
    FormsModule,
    HttpClientModule,
  ],
})
export class ChartModule {}
