import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FirebaseAuthGuard } from 'src/auth/auth.guard';
import { CurrentUserID } from 'src/auth/current-user.decorator';

import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('createUser')
  create(@CurrentUserID() id: string) {
    return this.usersService.create(id);
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('userFromToken')
  findFromToken(@CurrentUserID() id: string) {
    return this.usersService.findOne(id);
  }
}
