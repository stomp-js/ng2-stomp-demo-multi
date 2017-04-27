import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RawDataComponent} from './components/rawdata/rawdata.component';
import {StatusComponent} from './components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    RawDataComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
