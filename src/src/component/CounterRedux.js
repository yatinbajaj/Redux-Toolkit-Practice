import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

function CounterRedux() {
    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);
    const dispatch = useDispatch(); // return dispatch function
    const toggleCounterHandler = () => {
      dispatch({ type: 'toggle' });
  
    };
    const onIncrementHandler = () => {
      dispatch({ type: 'increment' });
      
    }
    const onIncrease = () => {
      dispatch({ type: 'increase', amount: 5 });
      
    }
    const onDecrementHandler = () => {
      dispatch({ type: 'decrement' });
      
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

export default CounterRedux
