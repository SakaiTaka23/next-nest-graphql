import React from 'react';
import { useUserFromTokenQuery } from '@/graphql/generated';

const Private = () => {
  const { data, loading, error } = useUserFromTokenQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{`user id : ${data?.userFromToken.id}`}</div>;
};

export default Private;
