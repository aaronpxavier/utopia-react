import {
  createMuiTheme,
  CssBaseline, Grid, LinearProgress, Paper, ThemeProvider
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import airplaneImage from './airplane.jpg';
import LoginForm from './LoginForm';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
  background-color: grey;
`;

const AirplaneImageGrid = styled(Grid)`
  background-image: url(${airplaneImage});
  background-size: cover;
  background-position: center;
`;

const ProgressTop = styled(LinearProgress)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 10px;
`;

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    type: 'dark',
    primary: { main: '#7c8b87' },
    secondary: { main: '#38849b' }
  }
});

const LoginPage = () => {
  const { pending } = useSelector(state => state.user.login)

  return (
    <ThemeProvider theme={theme}>
      <FullHeightGrid container>
        <CssBaseline />
        {pending && <ProgressTop />}
        <AirplaneImageGrid xs={false} sm={4} md={7} item />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          square
          elevation={24}
        >
          <LoginForm />
        </Grid>
      </FullHeightGrid>
    </ThemeProvider>
  );
};
export default LoginPage;
