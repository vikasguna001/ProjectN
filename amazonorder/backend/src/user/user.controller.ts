import { Post, Body, Controller, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserRO } from './user.interface';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users/login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserRO> {
    try {
      const _user = await this.userService.findOne(loginUserDto);

      const errors = { User: ' not found' };
      if (!_user) throw new HttpException({ errors }, 401);

      const token = await this.userService.generateJWT(_user);
      const { email, username } = _user;
      const user = { email, token, username };
      return { user };
    } catch (err) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
