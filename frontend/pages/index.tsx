import { Container, Typography } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const users = [{ id: 1 }, { id: 2 }];

  return (
    <Container maxWidth='sm'>
      <Typography variant='h2'>users</Typography>
      {users.map((user) => {
        return <div key={user?.id}>{user?.id}</div>;
      })}
    </Container>
  );
};

export default Home;
