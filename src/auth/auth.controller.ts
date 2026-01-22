import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUserDto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto: RegisterDto) {
    return this.authService.register(registerUserDto);
  }
}
