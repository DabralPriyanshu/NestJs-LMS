import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // map to a get method like @GetMapping  annotation
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
