import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Avatar, CssBaseline, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

import useFirebase from '@/firebase/useFirebase';

import SubmitButton from './Button/SubmitButton';
import EmailInput from './Inputs/EmailInput';
import PasswordInput from './Inputs/PasswordInput';
import AuthLinks from './Providers/AuthLinks';

type SubmitData = {
  email: string;
  password: string;
};

const SignUpForm = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { SignUp } = useFirebase();

  const submit = (data: SubmitData) => {
    SignUp(data.email, data.password);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
            <EmailInput />
            <PasswordInput />
            <SubmitButton />
          </Box>
        </FormProvider>
        <AuthLinks />
      </Box>
    </Container>
  );
};

export default SignUpForm;
