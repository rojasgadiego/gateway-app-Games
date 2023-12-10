import { BadRequestException, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { Auth } from '../entities/auth.entity';
import { LoginResponseDto } from '../dto/login-response';
import { LoginRequestDto } from '../dto/login-request';
import { RegisterRequestDto } from '../dto/register-request';
import { RegisterResponseDto } from '../dto/register-response';
import { FindUserResponseDto } from '../dto/find-user.response';
import { FindUserRequestDto } from '../dto/find-user.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => [Auth])
  findAll() {
    return this.authService.findAll();
  }

  @Mutation(() => LoginResponseDto)
  login(@Args('loginUserInput') loginUserInput: LoginRequestDto) {
    try {
      return this.authService.login(loginUserInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => RegisterResponseDto)
  register(@Args('registerUserInput') registerUserInput: RegisterRequestDto) {
    try {
      return this.authService.register(registerUserInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => FindUserResponseDto)
  findUserById(@Args('findUserById') findUserById: FindUserRequestDto) {
    return this.authService.findUserById(findUserById);
  }
}
