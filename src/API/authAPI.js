import axios from 'axios';

const apiUrl = 'http://localhost:8085/auth';

export const attemptLogin = (email, password) => {
  return axios.post(`${apiUrl}/login`, { email, password });
};
