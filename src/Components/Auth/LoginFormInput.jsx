import { TextField } from '@material-ui/core';
import React from 'react';

const LoginFormInput = () => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    id="email"
    label="Email Address"
    autoFocus
    fullWidth
  />
);

export default LoginFormInput;
