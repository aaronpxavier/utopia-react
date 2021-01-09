import {
  FormControlLabel, TextField, Checkbox, Button, Box
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { attemptLogin, resetError } from '../../Redux/Reducers/userSlice'
import { getLoginErrorMessage } from '../../Constants/errorMessages';

const LoginField = (props) => (
  <TextField
    {...props}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    color="secondary"
  />
);

const RememberMe = () => (
  <FormControlLabel
    control={<Checkbox value="remember" color="secondary" />}
    label="Remember me"
  />
);

const LoginFormInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { jwt, error, pending } = useSelector(state => state.user.login);
  
  if (jwt) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <LoginField
        id="email"
        label="Email Address"
        autoFocus
        value={email}
        onChange={event => setEmail(event.target.value)}
        disabled={pending}
        error={!!error}
      />
      <LoginField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        disabled={pending}
        helperText={getLoginErrorMessage(error)}
        error={!!error}
      />
      <Box pt={2} pb={4}>
        <RememberMe />
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => dispatch(attemptLogin({ email, password }))}
        disabled={pending}
      >
        Sign In
      </Button>
    </div>
  );
};

export default LoginFormInput;
