import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRoutingModule } from './http-routing.module';
import { HttpHomeComponent } from './components/http-home/http-home.component';
import { HttpListComponent } from './components/http-list/http-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TableModule } from 'primeng/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpGetComponent } from './components/http-get/http-get.component';
import { HttpPostComponent } from './components/http-post/http-post.component';
import { FormsModule } from '@angular/forms';
import { HttpDeleteComponent } from './components/http-delete/http-delete.component';

@NgModule({
  declarations: [
    HttpHomeComponent,
    HttpListComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpDeleteComponent,
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    HttpClientModule,
    DataTablesModule,
    TableModule,
    NgxDatatableModule,
    FormsModule,
  ],
})
export class HttpModule {}
