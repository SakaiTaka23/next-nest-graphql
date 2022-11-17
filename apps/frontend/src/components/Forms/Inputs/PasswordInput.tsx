import React from 'react';

import { TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const PasswordInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='password'
        rules={{
          required: true,
          minLength: 8,
          maxLength: 16,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='Password *' fullWidth />}
      />
      {errors.password && (
        <Typography color='error' variant='overline'>
          required and must be 8~16 words long
        </Typography>
      )}
    </>
  );
};

export default PasswordInput;
