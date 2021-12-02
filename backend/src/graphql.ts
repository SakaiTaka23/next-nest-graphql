
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    id: number;
}

export class UpdateUserInput {
    id: number;
}

export class User {
    id: number;
}

export abstract class IQuery {
    abstract userFromToken(): User | Promise<User>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(): User | Promise<User>;
}

type Nullable<T> = T | null;
