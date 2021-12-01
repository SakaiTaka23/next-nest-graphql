import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { useUsersQuery } from '../graphql/generated';

const Home: NextPage = () => {
  const { data, loading, error } = useUsersQuery();

  if (loading) return <p>Loading...</p>;
  console.log(error);
  if (error) return <p>Error :(</p>;

  return (
    <Container maxWidth='sm'>
      <Typography variant='h2'>users</Typography>
      {data?.users.map((user) => {
        return <div key={user?.id}>{user?.id}</div>;
      })}
    </Container>
  );
};

export default Home;
