# @stomp/ng2-stompjs Angular 2 Demo App - Multiple StompServices

> A demo application using [Angular 2](https://github.com/angular/angular) in
[Typescript](https://github.com/Microsoft/TypeScript) and [@stomp/ng2-stompjs](https://github.com/stomp-js/ng2-stompjs),
> generated with [angular-cli](https://github.com/angular/angular-cli).

Please note it is quite advanced. If your needs are simple you may be better off using one of the
following samples:

- https://github.com/stomp-js/ng4-stompjs-demo
- https://github.com/stomp-js/ng2-stompjs-demo

## Special notes

This sample demonstrates a special case where more than one StompServices with different 
configuration are needed.

## Setup

Install dependencies:

```bash
$ npm install
```
or, if using yarn

```bash
$ yarn
```

Configure details for your Stomp Brokers by editing files in 
 `src/api/`

The configuration should work as is for a RabbitMQ instance
 running on localhost with default settings and Web STOMP 
 plugin activated.
 (see: https://www.rabbitmq.com/web-stomp.html).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Where Next

Check the following files:

- `src/app/services/config/config.service.ts` -
  The configuration service. This service fetches a json file from a configurable location.
- Files in `src/app/stomp-services` folders define each of the StompServices

    - A class inherited from StompService is exported. This class is marked @Injectable().
    - A factory is created which will create instance of this class. Notice that the factory
      passes the path from where configuration JSON need to be fetched from. This path
      can be a full URL as well.
    - The class and factory is registered in `src/app/app.module.ts`.
    
- `src/app/app.module.ts` - Service provisions for
  [Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html).
  See the section about using Factories.
- `src/app/components/rawdata/rawdata.component.ts` - receives 2 different 
  instances of StompService identified by different class names. These are fully functional
  and independent instances. In this sample a queue is subscribed using one instance and
  messages are published using another instance.
- `src/app/components/status/status.component.ts` - monitoring status of Stomp connection.

## Contributors

- [Sam Finnigan](https://github.com/sjmf)
- [Jimi (Dimitris) Charalampidis](https://github.com/JimiC)
- [Deepak Kumar](https://github.com/kum-deepak)

## License

MIT

