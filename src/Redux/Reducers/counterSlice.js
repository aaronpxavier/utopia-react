import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
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

const { actions, reducer } = counterSlice;
export default reducer;
export const { increment, incrementValue } = actions;
