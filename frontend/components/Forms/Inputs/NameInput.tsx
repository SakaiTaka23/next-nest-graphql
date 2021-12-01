import { TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const NameInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        defaultValue=''
        name='name'
        rules={{
          required: true,
          minLength: 1,
          maxLength: 20,
        }}
        render={({ field }) => <TextField {...field} margin='normal' placeholder='Name *' fullWidth />}
      />
      {errors.name && (
        <Typography color='error' variant='overline'>
          required and must be 1~20 words long
        </Typography>
      )}
    </>
  );
};

export default NameInput;
