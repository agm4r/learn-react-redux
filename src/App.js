import { useSelector } from "react-redux";
import Counter from "./Counter";

function App() {
  const count = useSelector((state) => state.counter.count )
  
  return (
    <div>
      <h1>Count : { count }</h1>
      <Counter />
    </div>
  );
}

export default App;
