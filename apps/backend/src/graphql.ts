/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
  id: string;
}

export abstract class IQuery {
  abstract userFromToken(): User | Promise<User>;

  abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract createUser(): User | Promise<User>;
}

type Nullable<T> = T | null;
