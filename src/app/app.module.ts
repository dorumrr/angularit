import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLogInterceptor } from './interceptors/http.log.interceptor';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ObjToArrPipe } from './pipes/obj-to-arr.pipe';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { ApisService } from './services/apis.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SafeHtmlPipe,
    ObjToArrPipe,
    TimeagoPipe
  ],
  imports: [
    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

    NgbModule.forRoot()
  ],
  providers: [
    HttpLogInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: HttpLogInterceptor, multi: true },
    ApisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
