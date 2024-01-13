import logo from './logo.svg';
import './App.css';

import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';


function App() {
const myState= useSelector((state)=> state.changeNumber)
const dispatch=useDispatch()
  return (
    <div className="App">
  <h1>Hello World</h1>
<button onClick={()=>dispatch(incNumber())}>+++</button>
<input type="text" name="state" id="state"  value={myState} />
<button onClick={()=>dispatch(incNumber())}>---</button>
    </div>
  );
}

export default App;