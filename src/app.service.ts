import { Injectable } from '@nestjs/common';

@Injectable() //decorator you have to inject the service kind of dependency injection
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
