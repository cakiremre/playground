import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubModule } from './modules/public/pub.module';
import { HeaderLayoutComponent } from './shared/layout/header-layout/header-layout.component';
import { HeaderFooterLayoutComponent } from './shared/layout/header-footer-layout/header-footer-layout.component';
import { HeaderFooterMenuLayoutComponent } from './shared/layout/header-footer-menu-layout/header-footer-menu-layout.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from './modules/http/http.module';
import { ChartModule } from './modules/chart/chart.module';
import { RxjsopsModule } from './modules/rxjsops/rxjsops.module';
import { EventModule } from './modules/event/event.module';
import { SecModule } from './modules/security/sec.module';
import { I18nModule } from './modules/i18n/i18n.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AnimModule } from './modules/animations/anim.module';
import { AuthInterceptor } from './shared/util/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { EntityDataModule } from '@ngrx/data';
import { DataModule } from './modules/data/data.module';
import { entityConfig } from './modules/data/models/entity-metadata';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    HeaderFooterLayoutComponent,
    HeaderFooterMenuLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PubModule,
    AuthModule,
    FormsModule,
    HttpModule,
    ChartModule,
    RxjsopsModule,
    EventModule,
    SecModule,
    I18nModule,
    DataModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AnimModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
