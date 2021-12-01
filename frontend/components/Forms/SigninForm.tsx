import { Avatar, CssBaseline, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from './Button/SubmitButton';
import EmailInput from './Inputs/EmailInput';
import PasswordInput from './Inputs/PasswordInput';

export default function SignInForm() {
  const methods = useForm();

  const submit = (data: any) => {
    console.log(data);
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
          Sign In
        </Typography>
        <FormProvider {...methods}>
          <Box component='form' onSubmit={methods.handleSubmit(submit)} sx={{ mt: 3 }}>
            <EmailInput />
            <PasswordInput />
            <SubmitButton />
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
}
