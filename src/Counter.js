import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = () => {  
  const dispatch = useDispatch()
  
  const handleIncrement = () => dispatch(increment()) 
  const handleDecrement = () => dispatch(decrement()) 

  return (
    <div style={{ backgroundColor: '#FFA', textAlign: 'center' }}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
 
export default Counter;