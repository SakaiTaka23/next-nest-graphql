import { Button } from '@mui/material';
import React from 'react';

const SubmitButton = () => {
  return (
    <Button type='submit' color='primary' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
      submit
    </Button>
  );
};

export default SubmitButton;
