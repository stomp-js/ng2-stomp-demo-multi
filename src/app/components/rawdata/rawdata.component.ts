import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Message} from '@stomp/stompjs';
import { Http } from '@angular/http';
import {StompService} from '@stomp/ng2-stompjs';

import { Subscription } from 'rxjs/Subscription';
import {stompServiceFactory} from '../../services/config/config.service';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css'],
  providers: []
})
export class RawDataComponent implements OnInit, OnDestroy {

  // Stream of messages
  private subscription: Subscription;
  public messages: Observable<Message>;

  // Subscription status
  public subscribed: boolean;

  // Array of historic message (bodies)
  public mq: Array<string> = [];

  // A count of messages received
  public count = 0;

  private _counter = 1;

  private _orderStompService: StompService;
  private _stocksStompService: StompService;

  /** Constructor */
  constructor(_http: Http) {
    this._orderStompService = stompServiceFactory(_http, '/src/api/orders-config.json');
    this._stocksStompService = stompServiceFactory(_http, '/src/api/stocks-config.json');
  }

  ngOnInit() {
    this.subscribed = false;

    // Store local reference to Observable
    // for use with template ( | async )
    this.subscribe();
  }

  public subscribe() {
    if (this.subscribed) {
      return;
    }

    // Stream of messages
    this.messages = this._orderStompService.subscribe('/topic/ng-demo-sub');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);

    this.subscribed = true;
  }

  public unsubscribe() {
    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
    this.messages = null;

    this.subscribed = false;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  public onSendMessage() {
    const _getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    this._stocksStompService.publish('/topic/ng-demo-sub',
      `{ type: "Test Message", data: [ ${this._counter}, ${_getRandomInt(1, 100)}, ${_getRandomInt(1, 100)}] }`);

    this._counter++;
  }

  /** Consume a message from the _orderStompService */
  public on_next = (message: Message) => {

    // Store message in "historic messages" queue
    this.mq.push(message.body + '\n');

    // Count it
    this.count++;

    // Log it to the console
    console.log(message);
  }
}
