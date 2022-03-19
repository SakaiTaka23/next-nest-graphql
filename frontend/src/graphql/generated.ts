import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  userFromToken: User;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{ [key: string]: never }>;

export type CreateUserMutation = { __typename?: 'Mutation'; createUser: { __typename?: 'User'; id: string } };

export type UserFromTokenQueryVariables = Exact<{ [key: string]: never }>;

export type UserFromTokenQuery = { __typename?: 'Query'; userFromToken: { __typename?: 'User'; id: string } };

export type UserFromIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;

export type UserFromIdQuery = { __typename?: 'Query'; user?: { __typename?: 'User'; id: string } | null | undefined };

export const CreateUserDocument = gql`
  mutation CreateUser {
    createUser {
      id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UserFromTokenDocument = gql`
  query UserFromToken {
    userFromToken {
      id
    }
  }
`;

/**
 * __useUserFromTokenQuery__
 *
 * To run a query within a React component, call `useUserFromTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFromTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFromTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserFromTokenQuery(
  baseOptions?: Apollo.QueryHookOptions<UserFromTokenQuery, UserFromTokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserFromTokenQuery, UserFromTokenQueryVariables>(UserFromTokenDocument, options);
}
export function useUserFromTokenLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserFromTokenQuery, UserFromTokenQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserFromTokenQuery, UserFromTokenQueryVariables>(UserFromTokenDocument, options);
}
export type UserFromTokenQueryHookResult = ReturnType<typeof useUserFromTokenQuery>;
export type UserFromTokenLazyQueryHookResult = ReturnType<typeof useUserFromTokenLazyQuery>;
export type UserFromTokenQueryResult = Apollo.QueryResult<UserFromTokenQuery, UserFromTokenQueryVariables>;
export const UserFromIdDocument = gql`
  query UserFromID($userId: String!) {
    user(id: $userId) {
      id
    }
  }
`;

/**
 * __useUserFromIdQuery__
 *
 * To run a query within a React component, call `useUserFromIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFromIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFromIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserFromIdQuery(baseOptions: Apollo.QueryHookOptions<UserFromIdQuery, UserFromIdQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserFromIdQuery, UserFromIdQueryVariables>(UserFromIdDocument, options);
}
export function useUserFromIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserFromIdQuery, UserFromIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserFromIdQuery, UserFromIdQueryVariables>(UserFromIdDocument, options);
}
export type UserFromIdQueryHookResult = ReturnType<typeof useUserFromIdQuery>;
export type UserFromIdLazyQueryHookResult = ReturnType<typeof useUserFromIdLazyQuery>;
export type UserFromIdQueryResult = Apollo.QueryResult<UserFromIdQuery, UserFromIdQueryVariables>;
