import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nRoutingModule } from './i18n-routing.module';
import { I18nHomeComponent } from './components/i18n-home/i18n-home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [I18nHomeComponent],
  imports: [
    CommonModule,
    I18nRoutingModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
  ],
})
export class I18nModule {}
