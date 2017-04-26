import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StompState} from '@stomp/ng2-stompjs';
import {OrdersStompService} from "../../stomp-services/orders-stomp.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public state: Observable<string>;

  /** Constructor */
  constructor(private _stompService: OrdersStompService) { }

  ngOnInit() {
    console.log('Status init');
    this.state = this._stompService.state
      .map((state: number) => StompState[state]);
  }
}
