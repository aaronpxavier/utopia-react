import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../Reducers/counterSlice';

export default configureStore({
  reducer: counterSlice.reducer
});
