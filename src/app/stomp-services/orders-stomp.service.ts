import {Injectable} from '@angular/core';
import {StompService} from "@stomp/ng2-stompjs";
import {Http} from "@angular/http";
import {ConfigService} from "../services/config/config.service";

@Injectable()
export class OrdersStompService extends StompService {
}

export function ordersStompServiceFactory(_http: Http) {
  // The path can be absolute URL as well like http://127.0.0.1:4200/src/api/stocks-config.json
  const configService = new ConfigService(_http, '/src/api/orders-config.json');
  return new OrdersStompService(configService);
}
