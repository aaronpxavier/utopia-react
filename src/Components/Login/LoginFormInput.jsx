import {
  FormControlLabel, TextField, Checkbox, Button, Box
} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginField = ({
  id, label, autoFocus, type
}) => (
  <TextField
    id={id}
    label={label}
    autoFocus={autoFocus}
    type={type}
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

const handleLogin = (history) => {
  setTimeout(() => {
    history.push('/')
  }, 1000);
}

const LoginFormInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <div>
      <LoginField
        id="email"
        label="Email Address"
        autoFocus
        value={email}
        onChange={setEmail}
      />
      <LoginField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <Box pt={2} pb={4}>
        <RememberMe />
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => handleLogin(history)}
      >
        Sign In
      </Button>
    </div>
  );
};

export default LoginFormInput;
