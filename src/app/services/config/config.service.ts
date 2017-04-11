import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {StompConfig, StompConfigService} from '@stomp/ng2-stompjs/dist/';

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

  /** Constructor */
  constructor(private _http: Http) {
    super();
  }


  /** Make an http request for a config file, and
    * return a Promise for its resolution.
    */
  public get(): Observable<StompConfig> {
    const path = '/src/api/config.json';
    return this._http.get(path)
      .map(res => res.json());
  }
}

export function configServiceFactory(_http: Http) {
  return new ConfigService(_http);
}
