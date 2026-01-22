import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUserDto';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(registerUserDto: RegisterDto) {
    console.log(registerUserDto);
    //check if email already exists
    //hash the password
    const hash = await bcrypt.hash(registerUserDto.password, 10);
    return this.userService.createUser({ ...registerUserDto, password: hash });
  }
}
