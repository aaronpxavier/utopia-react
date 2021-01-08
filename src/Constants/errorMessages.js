import HttpStatus from './HttpStatus';

const INVALID_CREDENTIALS = 'Invalid email or password.';

export const getLoginErrorMessage = (status) => {
  if (status === HttpStatus.NOT_AUTHORIZED) {
    return INVALID_CREDENTIALS;
  } else if (status === HttpStatus.OK) {
    return '';
  }
};
