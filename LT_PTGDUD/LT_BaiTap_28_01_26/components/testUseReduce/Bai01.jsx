import { useReducer } from 'react'

const initialState = {count: 0}; 
function reducer(state, action) { 
	switch (action.kieu) { 
		case 'increment': return {x: state.x + 1}; 
		case 'decrement': return {x: state.x - 1}; 	
        default: throw new Error(); 
	}
 }

 export default function Counter() {  
	const [state, dispatch] = useReducer(reducer, {x : 0});  
	return (
    <>
		<button onClick={() =>{
			dispatch({ kieu:'increment' })      
			}}>        
			Increment       
		</button>      
        <button onClick={() =>{
			dispatch({ kieu:'decrement' })      
			}}>        
			decrement       
		</button>   
		<p>Count : {state.x}.</p>    
	</>  );
}

