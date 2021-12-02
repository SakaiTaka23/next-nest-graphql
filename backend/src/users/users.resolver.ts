import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('createUser')
  create() {
    return this.usersService.create();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('userFromToken')
  findFromToken() {
    return this.usersService.findFromToken();
  }
}
