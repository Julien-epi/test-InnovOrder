import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ProductDto } from './dto/product.dto';

const URL_API = 'https://world.openfoodfacts.org/api/v0/product/';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(loginUserDto);

    const payload = { userId: user.id };

    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.usersService.findOne(email);
    if (!(await user?.comparePassword(password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async callOpenFoodFacts(barcode: string) { 
    let response = [];
    let url = URL_API + barcode + '.json';
    await axios
      .get(url)
      .then((res) => {
        response = res.data;
    });
    console.log("🚀 ~ file: auth.service.ts:51 ~ AuthService ~ callOpenFoodFacts ~ response:", response)
    return response;
  }
}
