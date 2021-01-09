import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementValue } from '../Redux/Reducers/counterSlice';

const handleClick = (dispatch) => {
  dispatch(incrementValue(5));
};

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <button onClick={() => handleClick(dispatch)}>Increment</button>
      <p>Value: {value}</p>
    </div>
  );
};

export default Counter;
