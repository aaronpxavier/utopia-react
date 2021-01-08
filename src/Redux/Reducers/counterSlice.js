import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementValue: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { actions, reducer } = counterSlice;
export const { increment, incrementValue } = actions;
