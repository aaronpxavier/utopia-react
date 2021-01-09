import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as authAPI from '../../API/authAPI';

// for testing of pending state
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const attemptLogin = createAsyncThunk(
  'user/attemptLogin',
  async ({ email, password }, { rejectWithValue, getState }) => {
    try {
      await sleep(3000);
      const response = await authAPI.attemptLogin(email, password);
      return response.data.token;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      pending: false,
      jwt: null,
      error: null
    }
  },
  reducers: {},
  extraReducers: {
    [attemptLogin.fulfilled]: (state, action) => {
      state.login.pending = false;
      state.login.jwt = action.payload;
    },
    [attemptLogin.rejected]: (state, action) => {
      state.login.pending = false;
      state.login.error = action.payload;
    },
    [attemptLogin.pending]: (state, action) => {
      state.login.pending = true;
    }
  }
});

export const { resetError } = userSlice.actions;
export default userSlice.reducer;
