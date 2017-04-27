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

- `src/app/services/config/config.service.ts` - it has a generic factory method;
  which will create StompServices as per given config. In this case it takes a
  URL (relative or absolute).
- This sample creates 3 StompServices with different configurations - 
  two in constructor of `src/app/components/rawdata/rawdata.component.ts`
  and one in constructor of 
   `src/app/components/status/status.component.ts`
- This approach does not use Dependency Injection. Notice that none of the
  StompServices are listed in `app.module.ts`.
  It will be your responsibly to create and manage instances.

## Contributors

- [Sam Finnigan](https://github.com/sjmf)
- [Jimi (Dimitris) Charalampidis](https://github.com/JimiC)
- [Deepak Kumar](https://github.com/kum-deepak)

## License

MIT

