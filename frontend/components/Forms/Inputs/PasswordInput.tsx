import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const PasswordInput = () => {
  const { register } = useFormContext();

  return (
    <TextField
      margin='normal'
      placeholder='Password *'
      fullWidth
      {...register('password', {
        required: true,
        minLength: 8,
        maxLength: 16,
      })}
    />
  );
};

export default PasswordInput;
