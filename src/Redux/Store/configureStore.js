import { configureStore } from '@reduxjs/toolkit';
import counter from '../Reducers/counterSlice';
import user from '../Reducers/userSlice';

export default configureStore({
  reducer: {
    counter,
    user
  }
});
