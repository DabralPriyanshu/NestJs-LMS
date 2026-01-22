import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUserDto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() registerUserDto: RegisterDto) {
    const newUser = await this.authService.register(registerUserDto);
    return {
      success: true,
      data: newUser,
      err: {},
      message: 'Successfully created a user',
    };
  }
}
