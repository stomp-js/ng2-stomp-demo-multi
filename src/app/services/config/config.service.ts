import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {StompConfig, StompConfigService, StompService} from '@stomp/ng2-stompjs';

/**
 * An injected class which grabs the application
 * config variables (e.g. STOMP credentials)
 * for the user application.
 *
 * This makes an AJAX request to the server
 * api containing some user token and secret
 *
 * @type ConfigService
 */
@Injectable()
export class ConfigService extends StompConfigService {

  private _path: string;

  /** Constructor */
  constructor(private _http: Http, path: string) {
    super();
    this._path = path;
  }

  /** Make an http request for a config file, and
    * return a Promise for its resolution.
    */
  public get(): Observable<StompConfig> {
    const path = this._path;
    return this._http.get(path)
      .map(res => res.json());
  }
}
