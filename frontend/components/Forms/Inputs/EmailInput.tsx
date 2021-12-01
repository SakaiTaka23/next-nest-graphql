import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const EmailInput = () => {
  const { register } = useFormContext();

  return (
    <TextField
      margin='normal'
      placeholder='Email Address *'
      fullWidth
      {...register('email', {
        required: true,
        pattern: /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      })}
    />
  );
};

export default EmailInput;
