import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  // UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { GetUserAdmin } from './decorator';
// import { JwtGuard } from './guard';
// import { User } from '../user/entities/user.entity';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authSetvice: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authSetvice.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup-admin')
  signupAdmin(@Body() dto: AuthDto) {
    return this.authSetvice.signupAdmin(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'Autentica el usuario' })
  signin(@Body() dto: AuthDto) {
    return this.authSetvice.login(dto);
  }
}
