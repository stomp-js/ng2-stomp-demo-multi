import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RawDataComponent} from './components/rawdata/rawdata.component';
import {StatusComponent} from './components/status/status.component';
import {OrdersStompService, ordersStompServiceFactory} from "./stomp-services/orders-stomp.service";
import {StocksStompService, stocksStompServiceFactory} from "./stomp-services/stocks-stomp.service";

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
    {
      provide: OrdersStompService,
      useFactory: ordersStompServiceFactory,
      deps: [Http]
    },
    {
      provide: StocksStompService,
      useFactory: stocksStompServiceFactory,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
