import { Controller, Post, UseGuards, Get, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

//   @UseGuards(JwtAuthGuard)
  @Get('/searchProduct/:id')
  async test(@Param('id') barcode: string) {
   return this.authService.callOpenFoodFacts(barcode);
  }
}