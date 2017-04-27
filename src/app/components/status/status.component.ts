import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StompState} from '@stomp/ng2-stompjs';
import {StompService} from '@stomp/ng2-stompjs';
import { Http } from '@angular/http';
import {stompServiceFactory} from '../../services/config/config.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public state: Observable<string>;

  private _stompService: StompService;

  /** Constructor */
  constructor(_http: Http) {
    this._stompService = stompServiceFactory(_http, '/src/api/config.json');
  }

  ngOnInit() {
    console.log('Status init');
    this.state = this._stompService.state
      .map((state: number) => StompState[state]);
  }
}
