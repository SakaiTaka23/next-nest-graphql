import { Button, Grid } from '@mui/material';
import React from 'react';
import { useFirebase } from '@/firebase/useFirebase';

const AuthLinks = () => {
  const { SignInGoogle } = useFirebase();

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Button variant='contained' fullWidth onClick={SignInGoogle} sx={{ mt: 4 }}>
        Sign in with Google
      </Button>
    </Grid>
  );
};

export default AuthLinks;
