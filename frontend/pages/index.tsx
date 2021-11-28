import type { NextPage } from 'next';
import { useUsersQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>users</h1>
      {data?.users.map((user) => {
        return <div key={user?.id}>{user?.id}</div>;
      })}
    </>
  );
};

export default Home;
