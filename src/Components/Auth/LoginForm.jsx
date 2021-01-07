import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
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
  padding: 5rem;
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
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginFormInput />
    </CenteredLoginContainer>
  </FullHeightContainer>
);

export default LoginForm;
