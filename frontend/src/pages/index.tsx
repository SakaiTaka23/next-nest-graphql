import type { NextPage } from 'next';

import { useUserFromIdQuery } from '@/graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useUserFromIdQuery({
    variables: {
      userId: '1',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{`user id : ${data?.user?.id}`}</div>;
};

export default Home;
