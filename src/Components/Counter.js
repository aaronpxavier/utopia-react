import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '../Redux/Reducers/counterSlice';

const handleClick = (dispatch) => {
  dispatch(increment());
};

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  console.log(value);

  return (
    <div>
      <button onClick={() => handleClick(dispatch)}>Increment</button>
      <p>Value: {value}</p>
    </div>
  );
};

export default Counter;
