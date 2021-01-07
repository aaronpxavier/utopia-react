import {
  createMuiTheme,
  CssBaseline, Grid, Paper, ThemeProvider
} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
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

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const LoginPage = () => (
  <ThemeProvider theme={theme}>
    <FullHeightGrid container>
      <CssBaseline />
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
export default LoginPage;
