import { Avatar, Box, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
// import { spacing } from '@material-ui/system';
import styled from 'styled-components';
import React from 'react';

import LoginFormInput from './LoginFormInput';

const FullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
`;

const BlueAvatar = styled(Avatar)`
  background-color: #38849b;
`;

const LoginForm = () => (
  <FullHeightContainer>
    <CenteredLoginContainer>
      <BlueAvatar>
        <LockOutlined />
      </BlueAvatar>
      <Box mt={3}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
      <LoginFormInput />
    </CenteredLoginContainer>
  </FullHeightContainer>
);

export default LoginForm;
