import React from 'react';

import { Button } from '@mui/material';

const SubmitButton = () => {
  return (
    <Button type='submit' color='primary' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
      submit
    </Button>
  );
};

export default SubmitButton;
