import { useReducer,useState } from 'react'

const initialState = {
    isLoggedIn: false,
    userName: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true,
                userName: action.name
            };

        case "LOGOUT":
            return {            
                isLoggedIn: false,
                userName: ""
            };

        default:
            return state;
    }
}

export default function DemoLogin() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputState, setInPutState] = useState("");

    return (
        <>
           {
  state.isLoggedIn 
      ? (
            state.userName === "" 
             ? (<h1 style={{ color: "red" }}>Lỗi ERROR!!!</h1>) 
             : (<h1>Đã đăng nhập: {state.userName}</h1>)) 
      : (<h1>Chưa đăng nhập</h1>
  )
}


            <input type="text" onChange={(e) => setInPutState(e.target.value)} />

            <button
                onClick={() =>
                dispatch({
                        type: "LOGIN",
                        name: inputState,
                    }) 
                    }>Đăng nhập
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "LOGOUT" })
                }>Đăng xuất
            </button>
        </>
    );
}
