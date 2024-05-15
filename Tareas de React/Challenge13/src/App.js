import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from './store/counterSlice'

function App() {

const { counter } = useSelector( state => state.counter );
const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>App</h1>
      <hr />
      <span>Counter is: { counter }</span>
      <button className='btn btn-primary' onClick={() => dispatch(increment())}>
        +1
      </button>
      <button className='button-suma-value' onClick={() => dispatch(incrementByValue(2))}>+2</button>
    </div>
  );
}

export default App;
