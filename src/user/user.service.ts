import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUserDto';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterDto) {
    return { message: 'user created' };
  }
}
