import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { login: user.username, user_id: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(login: string, password: string): Promise<any> {
    try {
      return await this.usersService.createUser({ login, password });
    } catch (error) {
      console.log(error);
    }
    // const payload = { login: user.username, user_id: user.userId };
    // return {
    //   access_token: await this.jwtService.signAsync(payload),
    // };
  }
}
