import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Redux Strore';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch(); // return dispatch function
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());

  };
  const onIncrementHandler = () => {
    dispatch(counterActions.increment()); //{type:SOME_UNIQUE_IDENTIFIER}
    
  }
  const onIncrease = () => {
    dispatch(counterActions.increase(10)); //{type:SOME_UNIQUE_IDENTIFIER, PAYLOAD:10}
    
  }
  const onDecrementHandler = () => {
    dispatch(counterActions.decrease());
    
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onDecrementHandler}>Decrement</button>
        <button onClick={onIncrease}>increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
