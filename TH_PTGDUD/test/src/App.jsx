import CounterReducer from "./store/CounterReducer";
import { useSelector,useDispatch } from "react-redux";
import useLocalStorage from "./store/useLocalStorage";
import Users from "./store/Users";

function App() {
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();
   const [name,setName] = useLocalStorage("username","");
  return (
     <>
      {/* <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Tăng
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Giảm
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button> */}

     {/* <h2>demo</h2>
     <input type="text" value={name}
     onChange={(e) => setName(e.target.value)}/>
     <p>name : {name}</p> */}

     <Users/>
  </>
  );
}

export default App;